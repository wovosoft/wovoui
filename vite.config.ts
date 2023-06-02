import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// vite.config.js
import {resolve} from 'path'

/** @type {import('vite').UserConfig} */
export default defineConfig({
    plugins: [vue()],
    build: {
        sourcemap: true,
        target: 'modules',
        cssCodeSplit: true,
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: [
                resolve(__dirname, 'src/index.ts'),
                resolve(__dirname, 'src/composables/index.ts'),
                resolve(__dirname, 'src/directives/index.ts'),
                resolve(__dirname, 'src/shared/index.ts'),
            ],
            name: 'wovoui',
            // the proper extensions will be added
            fileName: 'index',
            // fileName: (format, entryName: string) => {
            //     if (format === 'es') {
            //         return `${entryName}.js`
            //     }
            //     return `${entryName}.${format}`
            // },
            formats: ["es", "cjs"],
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, './src')
        },
    },
})


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
        // cssCodeSplit: true,
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: {
                index: resolve(__dirname, 'src/index.ts'),
                composables: resolve(__dirname, 'src/composables/index.ts'),
                directives: resolve(__dirname, 'src/directives/index.ts'),
                shared: resolve(__dirname, 'src/shared/index.ts'),
            },
            name: 'wovoui',
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


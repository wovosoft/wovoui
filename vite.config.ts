import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// vite.config.js
import {resolve} from 'path'

/** @type {import('vite').UserConfig} */
export default defineConfig({
    plugins: [vue()],
    build: {
        sourcemap: true,
        // target: 'esnext',
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'wovoui',
            // the proper extensions will be added
            fileName: 'index',
            formats: ["es", "cjs", "umd"],
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
    resolve:{
        alias:{
            '@' : resolve(__dirname, './src')
        },
    },
})


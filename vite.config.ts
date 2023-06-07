//https://raulmelo.dev/en/blog/build-javascript-library-with-multiple-entry-points-using-vite-3

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// vite.config.js
import {resolve} from 'path'
import entry_points from "./entry_points";


/** @type {import('vite').UserConfig} */
export default defineConfig({
    plugins: [
        vue(),
    ],
    build: {
        sourcemap: true,
        target: 'modules',
        // cssCodeSplit: true,
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: entry_points,
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


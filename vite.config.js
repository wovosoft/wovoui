import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue()
    ],
    server: {
        watch: {
            usePolling: true
        }
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'wovoui',
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})

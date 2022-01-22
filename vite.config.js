import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],
    server: {
        watch: {
            usePolling: true
        }
    },
    build: {
        cssCodeSplit:false,
        lib: {
            entry: path.resolve(__dirname, 'src/index.js'),
            name: 'wovoui',
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})

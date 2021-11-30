import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from "@vue/babel-plugin-jsx"

const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx({})
    ],
    resolve: {
        alias: {
            Components: path.resolve(__dirname, 'src/components/'),
        },
    },
    server: {
        watch: {
            usePolling: true
        }
    },
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
    }
})

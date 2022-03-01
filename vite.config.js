import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
    esbuild: {
        jsxFactory: 'h',
        jsxFragment: 'Fragment'
    },
    plugins: [
        vue({
            "compilerOptions": {
                "types": [
                    "vite/client"
                ],
                "emitDeclarationOnly": false
            }
        }),
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        })
    ],
    server: {
        watch: {
            usePolling: true
        }
    },
    build: {
        // cssCodeSplit:false,
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

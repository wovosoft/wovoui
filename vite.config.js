import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// import svgLoader from 'vite-svg-loader'

const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        // svgLoader({
        //     svgoConfig: {
        //         multipass: true
        //     }
        // })
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
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            input:{
                // plugin:path.resolve(__dirname,'src/plugin.js'),
                icons:path.resolve(__dirname,'src/icons.js'),
            },
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

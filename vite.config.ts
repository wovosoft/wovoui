//https://raulmelo.dev/en/blog/build-javascript-library-with-multiple-entry-points-using-vite-3

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import entry_points from './entry_points'

/** @type {import('vite').UserConfig} */
export default defineConfig({
    plugins: [
        vue(),
    ],
    build: {
        sourcemap: true,
        target: 'esnext',
        cssCodeSplit: false,
        lib: {
            entry: entry_points,
            name: 'index',
            formats: ['es'],
        },
        rolldownOptions: {
            // Make sure to externalize deps that shouldn't be bundled into the library
            external: [
                'vue',
                'axios',
                'es-toolkit',
                '@vueuse/core',
                '@vueuse/components',
                '@popperjs/core',
                '@wovosoft/wovoui-icons',
                'bootstrap',
                'bootstrap-icons',
                'chart.js',
                'dayjs',
                'prismjs',
                /^vue(\/.*)?$/,
                /^axios(\/.*)?$/,
                /^es-toolkit(\/.*)?$/,
                /^@vueuse\/core(\/.*)?$/,
                /^@vueuse\/components(\/.*)?$/,
                /^@popperjs\/core(\/.*)?$/,
                /^@wovosoft\/wovoui-icons(\/.*)?$/,
                /^bootstrap(\/.*)?$/,
                /^bootstrap-icons(\/.*)?$/,
                /^chart\.js(\/.*)?$/,
                /^dayjs(\/.*)?$/,
                /^prismjs(\/.*)?$/,
            ],
            output: {
                format: 'es',
                preserveModules: true,
                preserveModulesRoot: 'src',
                dir: 'dist',
                entryFileNames: '[name].js',
            },
        },
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, './src')
            }
        ],
    },
})


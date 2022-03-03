import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueJsx from '@vitejs/plugin-vue-jsx'
import dts from 'vite-plugin-dts'

const path = require("path");

export default defineConfig({
    // esbuild: {
    //     jsxFactory: 'h',
    //     jsxFragment: 'Fragment'
    // },
    plugins: [
        vue({}),
        // vueJsx({}),
        dts({include: ["src/**/*"]})
    ],
    server: {
        watch: {
            usePolling: true
        }
    },
    build: {
        target: 'esnext',
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'wovoui',
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                },
                // Since we publish our ./src folder, there's no point
                // in bloating sourcemaps with another copy of it.
                sourcemapExcludeSources: true,
            }
        }
    }
});

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

const path = require("path");

/** @type {import('vite').UserConfig} */
export default defineConfig({

    plugins: [
        vue({}),

        // vueJsx({}),
        // dts({
        //     include: ["src/**/*"],
        //     exclude: ["node_modules/**/*"]
        // })
    ],
    server: {
        watch: {
            usePolling: true
        }
    },
    build: {
        sourcemap: true,
        target: 'esnext',
        lib: {
            entry: path.resolve(__dirname, 'src/index.ts'),
            name: 'wovoui',
            // fileName: "index",
            fileName: (format) => `[name].${format}.mjs`
        },

        rollupOptions: {
            external: [
                'vue',
                'axios'
            ],
            output: {
                // entryFileNames: `[name].[hash].mjs`,
                // chunkFileNames: `[name].[hash].mjs`,
                globals: {
                    vue: 'Vue',
                    axios: 'axios'
                },
                // Since we publish our ./src folder, there's no point
                // in bloating sourcemaps with another copy of it.
                sourcemapExcludeSources: true,
            }
        }
    }
});

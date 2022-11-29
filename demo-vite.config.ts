import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import {resolve} from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "/demo")
        }
    },
    plugins: [
        vue({}),
    ],
    server: {
        watch: {
            usePolling: true
        }
    },
    build: {
        target: 'esnext',
        outDir: "dist-demo",
        lib: {
            entry: resolve(__dirname, 'demo/index.ts'),
            name: 'wovoui',
            fileName: (format) => `index.${format}.js`
        },
        rollupOptions: {
            external: [
                'vue',
                'axios'
            ],
            output: {
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

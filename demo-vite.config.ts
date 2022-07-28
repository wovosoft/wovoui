import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require("path");

export default defineConfig({
    // esbuild: {
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
            entry: path.resolve(__dirname, 'demo/index.ts'),
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

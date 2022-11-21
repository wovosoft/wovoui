var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// vite.config.ts
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
var path = __require("path");
var vite_config_default = defineConfig({
  plugins: [
    vue({}),
    dts({
      include: ["src/**/*"],
      exclude: ["node_modules/**/*"]
    })
  ],
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    sourcemap: true,
    target: "esnext",
    lib: {
      entry: path.resolve("C:\\laragon\\www\\wovoui", "src/index.ts"),
      name: "wovoui",
      fileName: (format) => `[name].${format}.mjs`
    },
    rollupOptions: {
      external: [
        "vue",
        "axios"
      ],
      output: {
        globals: {
          vue: "Vue",
          axios: "axios"
        },
        sourcemapExcludeSources: true
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXHJcblxyXG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcblxyXG4vKiogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9ICovXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcblxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIHZ1ZSh7fSksXHJcblxyXG4gICAgICAgIC8vIHZ1ZUpzeCh7fSksXHJcbiAgICAgICAgZHRzKHtcclxuICAgICAgICAgICAgaW5jbHVkZTogW1wic3JjLyoqLypcIl0sXHJcbiAgICAgICAgICAgIGV4Y2x1ZGU6IFtcIm5vZGVfbW9kdWxlcy8qKi8qXCJdXHJcbiAgICAgICAgfSlcclxuICAgIF0sXHJcbiAgICBzZXJ2ZXI6IHtcclxuICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICB1c2VQb2xsaW5nOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgc291cmNlbWFwOiB0cnVlLFxyXG4gICAgICAgIHRhcmdldDogJ2VzbmV4dCcsXHJcbiAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgIGVudHJ5OiBwYXRoLnJlc29sdmUoXCJDOlxcXFxsYXJhZ29uXFxcXHd3d1xcXFx3b3ZvdWlcIiwgJ3NyYy9pbmRleC50cycpLFxyXG4gICAgICAgICAgICBuYW1lOiAnd292b3VpJyxcclxuICAgICAgICAgICAgLy8gZmlsZU5hbWU6IFwiaW5kZXhcIixcclxuICAgICAgICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBbbmFtZV0uJHtmb3JtYXR9Lm1qc2BcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGV4dGVybmFsOiBbXHJcbiAgICAgICAgICAgICAgICAndnVlJyxcclxuICAgICAgICAgICAgICAgICdheGlvcydcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgICAgICAgICAvLyBlbnRyeUZpbGVOYW1lczogYFtuYW1lXS5baGFzaF0ubWpzYCxcclxuICAgICAgICAgICAgICAgIC8vIGNodW5rRmlsZU5hbWVzOiBgW25hbWVdLltoYXNoXS5tanNgLFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHZ1ZTogJ1Z1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3M6ICdheGlvcydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBTaW5jZSB3ZSBwdWJsaXNoIG91ciAuL3NyYyBmb2xkZXIsIHRoZXJlJ3Mgbm8gcG9pbnRcclxuICAgICAgICAgICAgICAgIC8vIGluIGJsb2F0aW5nIHNvdXJjZW1hcHMgd2l0aCBhbm90aGVyIGNvcHkgb2YgaXQuXHJcbiAgICAgICAgICAgICAgICBzb3VyY2VtYXBFeGNsdWRlU291cmNlczogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBLFNBQVEsb0JBQW1CO0FBQzNCLE9BQU8sU0FBUztBQUNoQixPQUFPLFNBQVM7QUFFaEIsSUFBTSxPQUFPLFVBQVE7QUFHckIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFFeEIsU0FBUztBQUFBLElBQ0wsSUFBSSxDQUFDLENBQUM7QUFBQSxJQUdOLElBQUk7QUFBQSxNQUNBLFNBQVMsQ0FBQyxVQUFVO0FBQUEsTUFDcEIsU0FBUyxDQUFDLG1CQUFtQjtBQUFBLElBQ2pDLENBQUM7QUFBQSxFQUNMO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDSixPQUFPO0FBQUEsTUFDSCxZQUFZO0FBQUEsSUFDaEI7QUFBQSxFQUNKO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxXQUFXO0FBQUEsSUFDWCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDRCxPQUFPLEtBQUssUUFBUSw0QkFBNEIsY0FBYztBQUFBLE1BQzlELE1BQU07QUFBQSxNQUVOLFVBQVUsQ0FBQyxXQUFXLFVBQVU7QUFBQSxJQUNwQztBQUFBLElBRUEsZUFBZTtBQUFBLE1BQ1gsVUFBVTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsTUFDSjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBR0osU0FBUztBQUFBLFVBQ0wsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFFBQ1g7QUFBQSxRQUdBLHlCQUF5QjtBQUFBLE1BQzdCO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=

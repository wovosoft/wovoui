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
var path = __require("path");
var vite_config_default = defineConfig({
  plugins: [
    vue({})
  ],
  server: {
    watch: {
      usePolling: true
    }
  },
  build: {
    target: "esnext",
    lib: {
      entry: path.resolve("C:\\laragon\\www\\wovoui", "src/index.ts"),
      name: "wovoui",
      fileName: (format) => `index.${format}.js`
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXHJcblxyXG5jb25zdCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcblxyXG4vKiogQHR5cGUge2ltcG9ydCgndml0ZScpLlVzZXJDb25maWd9ICovXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgdnVlKHt9KSxcclxuICAgICAgICAvLyB2dWVKc3goe30pLFxyXG4gICAgICAgIC8vIGR0cyh7aW5jbHVkZTogW1wic3JjLyoqLypcIl19KVxyXG4gICAgXSxcclxuICAgIHNlcnZlcjoge1xyXG4gICAgICAgIHdhdGNoOiB7XHJcbiAgICAgICAgICAgIHVzZVBvbGxpbmc6IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICB0YXJnZXQ6ICdlc25leHQnLFxyXG4gICAgICAgIGxpYjoge1xyXG4gICAgICAgICAgICBlbnRyeTogcGF0aC5yZXNvbHZlKFwiQzpcXFxcbGFyYWdvblxcXFx3d3dcXFxcd292b3VpXCIsICdzcmMvaW5kZXgudHMnKSxcclxuICAgICAgICAgICAgbmFtZTogJ3dvdm91aScsXHJcbiAgICAgICAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgaW5kZXguJHtmb3JtYXR9LmpzYFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAgICAgICBleHRlcm5hbDogW1xyXG4gICAgICAgICAgICAgICAgJ3Z1ZScsXHJcbiAgICAgICAgICAgICAgICAnYXhpb3MnXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHZ1ZTogJ1Z1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgYXhpb3M6ICdheGlvcydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAvLyBTaW5jZSB3ZSBwdWJsaXNoIG91ciAuL3NyYyBmb2xkZXIsIHRoZXJlJ3Mgbm8gcG9pbnRcclxuICAgICAgICAgICAgICAgIC8vIGluIGJsb2F0aW5nIHNvdXJjZW1hcHMgd2l0aCBhbm90aGVyIGNvcHkgb2YgaXQuXHJcbiAgICAgICAgICAgICAgICBzb3VyY2VtYXBFeGNsdWRlU291cmNlczogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7OztBQUFBLFNBQVEsb0JBQW1CO0FBQzNCLE9BQU8sU0FBUztBQUdoQixJQUFNLE9BQU8sVUFBUTtBQUdyQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxJQUFJLENBQUMsQ0FBQztBQUFBLEVBR1Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNKLE9BQU87QUFBQSxNQUNILFlBQVk7QUFBQSxJQUNoQjtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILFFBQVE7QUFBQSxJQUNSLEtBQUs7QUFBQSxNQUNELE9BQU8sS0FBSyxRQUFRLDRCQUE0QixjQUFjO0FBQUEsTUFDOUQsTUFBTTtBQUFBLE1BQ04sVUFBVSxDQUFDLFdBQVcsU0FBUztBQUFBLElBQ25DO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDWCxVQUFVO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxNQUNKO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDSixTQUFTO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsUUFDWDtBQUFBLFFBR0EseUJBQXlCO0FBQUEsTUFDN0I7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==

import {defineConfig} from "vitepress";
import sidebar from "./sidebar";

export default defineConfig({
    title: "wovoui",
    description: "Bootstrap 5 and Vue 3 design library",
    themeConfig: {
        sidebar
    },
})

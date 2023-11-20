import {ColorVariants} from "@/index";

export const colors: ColorVariants[] = ["primary", "secondary", "success", "danger", "warning", "info", "light", "dark"];

export function sizesOf(type: string): any {
    const sizes = {
        button: ["sm", "lg"]
    }

    // @ts-ignore
    return sizes[type];
}
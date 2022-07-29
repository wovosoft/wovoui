import {ColorVariants} from "@wovosoft/wovoui-icons/dist/types";

export const colors:ColorVariants[]=["primary","secondary","success","danger","warning","info","light","dark"];

export function sizesOf(type:string){
    const sizes={
        button:["sm","lg"]
    }

    return sizes[type];
}
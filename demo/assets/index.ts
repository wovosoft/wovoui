export const colors=["primary","secondary","success","danger","warning","info","light","dark","link"];

export function sizesOf(type:string){
    const sizes={
        button:["sm","lg"]
    }

    return sizes[type];
}
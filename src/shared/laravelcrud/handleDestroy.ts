import axios from "axios";

export default function (item: object, props): Promise<any> {
    if (props.destroyHandler) {
        return props.destroyHandler(item);
    }
    let url: string = null;
    if (typeof props.destroyUrl === "string") {
        url = props.destroyUrl;
    } else if (typeof props.destroyUrl === "function") {
        url = props.destroyUrl(item);
    }
    return axios.delete(url);
}
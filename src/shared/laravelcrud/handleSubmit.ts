import axios from "axios";
import {Ref} from "vue";

export default function (props, currentItem: Ref<object>): Promise<any> {
    if (props.handleFormSubmit) {
        return props.handleFormSubmit(currentItem.value);
    }
    return axios.put(props.formSubmitUrl, currentItem.value);
}
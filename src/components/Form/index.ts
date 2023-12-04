import {makeBoolean, makeProp, makeSize, makeString, makeTag} from "@/composables";
import {ButtonSizes} from "@/index";
import {PropType} from "vue";

export {default as Checkbox} from "./Checkbox.vue";
export {default as CheckboxGroup} from "./CheckboxGroup.vue";
export {default as FormGroup} from "./FormGroup.vue";
export {default as FormLabel} from "./FormLabel";
export {default as Datepicker} from "./Datepicker.vue";
export {default as Feedback} from "./Feedback";
export {default as Radio} from "./Radio.vue";
export {default as RadioGroup} from "./RadioGroup.vue";
export {default as Range} from "./Range.vue";
export {default as Rating} from "./Rating.vue";
export {default as Select} from "./Select.vue";
export {default as SpinButton} from "./SpinButton.vue";
export {default as Textarea} from "./Textarea";
export {default as Calendar} from "./Calendar.vue";
export {default as Tags} from "./Tags.vue";
export {default as TypeHead} from "./TypeHead.vue";
export {default as Multiselect} from "./Multiselect.vue";
export {default as Input} from "./Input";
export {default as InputGroup} from "./InputGroup.vue";
export {default as InputGroupText} from "./InputGroupText";
export {default as FormControl} from "./FormControl.vue";
export {default as Autocomplete} from "./Autocomplete.vue";

export interface SelectProps {
    multiple?: boolean
    size?: ButtonSizes
    options?: any
    valueField?: ((str: any) => any) | string
    textField?: ((str: any) => any) | string
    disabledField?: string
    labelField?: string
    modelValue?: any,
    placeholder?: string,
    scrollHeight?: string,
}

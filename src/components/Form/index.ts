import {
    ButtonSizes,
    ClassType, ColorVariants, HasTag, HTMLInputTypes, makeBoolean, makeProp, makeSize, makeString, makeTag,
    TextAlign
} from "@/index";
import {Ref} from "vue";

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
export {default as Input} from "./Input.vue";
export {default as InputGroup} from "./InputGroup.vue";
export {default as InputGroupText} from "./InputGroupText.vue";
export {default as FormControl} from "./FormControl.vue";

// export {default as Autocomplete} from "./Autocomplete.txt";

export interface InputProps {
    //some actions vary based on type so considering at as a prop
    type?: HTMLInputTypes;
    size?: ButtonSizes;
    plain?: boolean;
    state?: boolean;
}

export interface InputGroupProps extends HasTag{
    size?:ButtonSizes;
    prepend?: string;
    append?: string;
    noWrap?: boolean;
}

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

export interface TypeHeadProps {
    apiUrl?: string;
    queryKey?: string;
    getItems?: (items: Ref<any>, query: Ref<string | number | null>) => any,
    menuHeight?: string;
    searchSize?: ButtonSizes;
    searchClass?: ClassType;
    toggleTag?: keyof HTMLElementTagNameMap;
    toggleSize?: ButtonSizes;
    toggleClass?: ClassType;
    menuClass?: ClassType;
    menuAttrs?: any; //should point to DropdownMenuProps, implement it later
    menuDark?: boolean;
    menuTag?: keyof HTMLElementTagNameMap;
    searchPlaceholder?: string;
    modelValue?: any;
    variant?: ColorVariants;
    textAlign?: TextAlign;
    getLabel?: (item: any) => any;
    getOption?: (item: any) => any;
    noCloseOnOutsideClick?: boolean;
    noCloseOnItemSelect?: boolean;
    noCloseOnEscPressed?: boolean;
    clearItemsOnSelect?: boolean;
    preload?: boolean;
}

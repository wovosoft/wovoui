import {
    ButtonSizes,
    ClassType,
    ColorVariants,
    type FeedbackTypes,
    HasColorVariant,
    HasTag,
    HTMLInputTypes,
    type ResponsiveNumbers,
    TextAlign
} from "@/index";
import {HTMLAttributes, InjectionKey, Ref} from "vue";

export {default as Checkbox} from "./Checkbox.vue";
export {default as CheckboxGroup} from "./CheckboxGroup.vue";
export {default as FormGroup} from "./FormGroup.vue";
export {default as FormLabel} from "./FormLabel.vue";
export {default as Datepicker} from "./Datepicker.vue";
export {default as Feedback} from "./Feedback.vue";
export {default as Radio} from "./Radio.vue";
export {default as RadioGroup} from "./RadioGroup.vue";
export {default as Range} from "./Range.vue";
export {default as Rating} from "./Rating.vue";
export {default as Select} from "./Select.vue";
export {default as SpinButton} from "./SpinButton.vue";
export {default as Textarea} from "./Textarea.vue";
export {default as Calendar} from "./Calendar.vue";
export {default as Tags} from "./Tags.vue";
export {default as TypeHead} from "./TypeHead.vue";
export {default as Multiselect} from "./Multiselect.vue";
export {default as Input} from "./Input.vue";
export {default as InputGroup} from "./InputGroup.vue";
export {default as InputGroupText} from "./InputGroupText.vue";
export {default as FormControl} from "./FormControl.vue";

// export {default as Autocomplete} from "./Autocomplete.txt";
export const HasFloatingLabelInjectionKey = Symbol() as InjectionKey<boolean>;

export interface InputProps {
    //some actions vary based on type so considering at as a prop
    type?: HTMLInputTypes;
    size?: ButtonSizes;
    plain?: boolean;
    state?: boolean;
    placeholder?: string;
}

export interface InputGroupProps extends HasTag {
    size?: ButtonSizes;
    prepend?: string;
    append?: string;
    noWrap?: boolean;
}

export interface SelectProps {
    multiple?: boolean;
    size?: ButtonSizes;
    options?: Record<string, any>[];
    valueField?: ((str: any) => any) | string;
    textField?: ((str: any) => any) | string;
    disabledField?: string;
    labelField?: string;
    modelValue?: any;
    placeholder?: string;
    scrollHeight?: string;
}

export interface TypeHeadProps {
    apiUrl?: string;
    queryKey?: string;
    getItems?: (items: Ref<any>, query: Ref<any>) => any,
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

export interface TextareaProps {
    size?: ButtonSizes;
    modelValue?: string;
}

export interface TagsProps extends HasTag {
    role?: HTMLAttributes['role'];
    tabindex?: HTMLAttributes['tabindex'];
    placeholder?: string;
    modelValue?: any[];
    removeOnDelete?: boolean;
    separator?: any[];
    tagPills?: boolean;
    tagVariant?: ColorVariants;
    badgeVariant?: ColorVariants;
    addButtonSize?: ButtonSizes;
    addButtonText?: string;
    noAddOnEnter?: boolean;
}

export interface SpinButtonProps {
    modelValue?: number;
    step?: number;
    min?: number;
    max?: number;
    buttonVariant?: ColorVariants;
    size?: ButtonSizes;
    formatter?: (value: any) => any;
    inline?: boolean;
    vertical?: boolean;
    longPressTrigger?: number;
    longPressInterval?: number;
}

export interface RatingProps extends HasColorVariant {
    min?: number;
    max?: number;
    modelValue?: number;
}

export interface RadioGroupProps {
    options?: any[];
    textField?: string;
    valueField?: string;
    inline?: boolean;
    name?: string;
    required?: boolean;
}

export interface RadioProps {
    name?: string;
    id?: string;
    value?: any;
    wrapperAttrs?: any;
    labelAttrs?: any;
    inline?: boolean;
}

export interface MultiselectProps {
    getItems: (items: Ref<any[]>, filter?: string) => any;
    searchSize?: ButtonSizes;
    toggleSize?: ButtonSizes;
    searchPlaceholder?: string;
    loading?: boolean;
    modelValue?: any[];
    resetTitle?: string;
    disableReset?: boolean;
}

export interface FormLabelProps {
    horizontal?: boolean;
    sm?: ResponsiveNumbers;
    md?: ResponsiveNumbers;
    lg?: ResponsiveNumbers;
    xl?: ResponsiveNumbers;
}

export interface FeedbackProps extends HasTag {
    type?: FeedbackTypes;
    message?: string;
}

export interface CheckboxGroupProps {
    options?: any[];
    textField?: string;
    valueField?: string;
    inline?: boolean;
    switch?: boolean;
    reverse?: boolean;
}

export interface CheckboxProps {
    switch?: boolean;
    // button: makeBoolean(false),//implement later
    inline?: boolean;
    reverse?: boolean;
    disabled?: boolean;
    value?: any;
    uncheckedValue?: any;
    id?: string;
    //sometimes checking might be done by object keys. in that case this function can be used
    checkBy?: (value: any, model: any) => boolean
}
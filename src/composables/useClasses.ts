import type {ColorVariants, PlaceholderSizes, ResponsiveNumbers, TextVariants} from "../types";

export type VariantProp = {
    bg?: ColorVariants;
    border?: ColorVariants;
    //both plain text variants and color variants are included
    //@link https://getbootstrap.com/docs/5.2/utilities/colors/#colors
    text?: TextVariants | ColorVariants;
    placeholderGlow?: boolean;
    placeholderWave?: boolean;
    placeholderAnimation?: 'glow' | 'wave';
    placeholderSize?: PlaceholderSizes;
    col?: ResponsiveNumbers;
    accordionFlush?: boolean;
}

export const getBinaryClasses = (types: VariantProp = {}) => ({
    ["bg-" + types.bg]: !!types.bg,
    ["border-" + types.border]: !!types.border,
    ["text-" + types.text]: !!types.text,
    "placeholder-glow": !!types.placeholderGlow,
    "placeholder-wave": !!types.placeholderWave,
    ["placeholder-" + types.placeholderAnimation]: !!types.placeholderAnimation,
    ["placeholder-" + types.placeholderSize]: !!types.placeholderSize,
    ["col-" + types.col]: !!types.col,
    'accordion-flush': !!types.accordionFlush
});
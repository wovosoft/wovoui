type ColorVariants = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'

type ButtonSizes =
    | 'sm'
    | 'lg'

type TrueFalse =
    | true
    | false

type Binary =
    | true
    | false

type BinaryString =
    | Binary
    | string

export {
    ColorVariants,
    ButtonSizes,
    TrueFalse,
    Binary,
    BinaryString
}
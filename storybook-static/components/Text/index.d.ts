import { ClassProp } from 'class-variance-authority/types';
/// <reference types="react" />
import { PolymorphicComponentPropsWithRef } from '../../utils/types';
import { VariantProps } from 'class-variance-authority';
declare const textStyles: (props?: ({
    emphasis?: "low" | null | undefined;
    size?: "sm" | "lg" | "base" | "xl" | "2xl" | "3xl" | null | undefined;
    weight?: "bold" | "thin" | "normal" | "medium" | "semibold" | "black" | null | undefined;
    align?: "center" | "left" | "right" | null | undefined;
    italic?: boolean | null | undefined;
    underline?: boolean | null | undefined;
} & ClassProp) | undefined) => string;
type TextProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, VariantProps<typeof textStyles>>;
type TextComponent = <C extends React.ElementType = 'span'>(props: TextProps<C>) => React.ReactElement | null;
export declare const Text: TextComponent;
export {};

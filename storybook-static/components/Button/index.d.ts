import { ClassProp } from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ForwardRefExoticComponent, RefAttributes, ComponentProps } from 'react';
declare const buttonStyles: (props?: ({
    variant?: "solid" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
    colorscheme?: "primary" | null | undefined;
} & ClassProp) | undefined) => string;
type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonStyles> & {
    variant?: string;
    size?: string;
    colorscheme?: string;
};
export declare const Button: ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & RefAttributes<HTMLButtonElement>>;
export {};

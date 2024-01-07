import { ClassProp } from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { ForwardRefExoticComponent, RefAttributes, ComponentProps } from 'react';
declare const inputStyles: (props?: ClassProp | undefined) => string;
type InputProps = ComponentProps<'input'> & VariantProps<typeof inputStyles>;
export declare const Input: ForwardRefExoticComponent<Omit<InputProps, "ref"> & RefAttributes<HTMLInputElement>>;
export {};

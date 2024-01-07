import { ForwardRefExoticComponent, DetailedHTMLProps, HTMLAttributes, RefObject, RefAttributes, ComponentPropsWithRef } from 'react';
export type BoxProps = ComponentPropsWithRef<'div'>;
export declare const Box: ForwardRefExoticComponent<Omit<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined;
}, "ref"> & RefAttributes<HTMLDivElement>>;

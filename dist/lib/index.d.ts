// Generated by dts-bundle v0.3.0

declare module 'tss-lib' {
    export * from '__tss-lib/extensions';
    export * from '__tss-lib/removeAccents';
    export * from '__tss-lib/filterComparator';
}

declare module '__tss-lib/extensions' {
    export * from '__tss-lib/extensions/stringExtensions';
    export * from '__tss-lib/extensions/numberExtensions';
}

declare module '__tss-lib/removeAccents' {
    export function removeAccents(input: string): string;
}

declare module '__tss-lib/filterComparator' {
    export function filterComparator(obj: any, text: string): boolean;
}

declare module '__tss-lib/extensions/stringExtensions' {
    export function trimChar(value: string, trimChar: string): string;
    export function trimCharLeft(value: string, trimChar: string): string;
    export function trimCharRight(value: string, trimChar: string): string;
}

declare module '__tss-lib/extensions/numberExtensions' {
    export function padLeft(value: number, totalWidth: number, paddingChar?: string): string;
}


export * from './component';
export declare const remoteToComponent: (url: string) => Promise<string | undefined>;
export declare const codeToComponent: (component: string) => any;
export declare const rawToCode: (text: string) => string | undefined;
export declare const rawToComponent: (text: string) => any;

export interface DependencyFunction {
    (name: string): unknown;
}
export interface DependencyTable {
    [props: string]: unknown;
}
export interface CreateRequires {
    (dependencies?: () => DependencyTable): (arg0: string) => unknown;
}
export declare const createRequires: CreateRequires;

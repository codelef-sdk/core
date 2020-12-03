export type Primitive = string | number | object | boolean;
export type UnpackedArray<T> = T extends Array<infer U> ? U : T;
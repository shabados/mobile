/**
 * Merges and overwrites any existing declarations in T1 with T2.
 */
export type Override<T1, T2> = Omit<T1, keyof T2> & T2

export type ValueOf<T> = T[keyof T]

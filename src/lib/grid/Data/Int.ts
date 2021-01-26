import * as t from 'io-ts'; 
import { some, none, Option } from 'fp-ts/Option'; 

export interface IntBrand {
    readonly Int: unique symbol
}

export type Int = t.Branded<number, IntBrand>

export const Int = t.brand(t.number, (n): n is Int => Number.isInteger(n), 'Int'); 


export function isInt(n: number): n is Int {
    return Number.isInteger(n) && n >= 0
}
  
export function makeInt(n: number): Option<Int> {
    return isInt(n) ? some(n) : none
}


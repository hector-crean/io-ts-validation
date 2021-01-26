import { Prism } from 'monocle-ts'
import { some, none } from 'fp-ts/Option'


export const getPrism = <U>() =>
    <K extends keyof U, V extends U[K]>(key: K, value: V) =>
      new Prism<U, Extract<U, {[_ in K]: V}>>(
        union => (union[key] === value ? some(union) : none as any),
        s => s
      )
  

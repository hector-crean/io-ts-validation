import * as t from 'io-ts'
import { Lens } from 'monocle-ts'


export interface ExactHasLenses extends t.ExactType<HasLenses> {}


export type HasLenses = t.InterfaceType<any> | ExactHasLenses

function getProps(codec: HasLenses): t.Props {
  switch (codec._tag) {
    case 'InterfaceType':
      return codec.props
    case 'ExactType':
      return getProps(codec.type)
  }
}

const fromProp = Lens.fromProp<any>()

/**
 * Return a `Lens` for each prop
 *
 * @example
 * import * as t from 'io-ts'
 * import { getLenses } from 'io-ts-types/lib/getLenses'
 *
 * const Person = t.type({
 *   name: t.string,
 *   age: t.number
 * })
 *
 * const lenses = getLenses(Person)
 * assert.strictEqual(lenses.age.get({ name: 'Giulio', age: 44 }), 44)
 *
 */
export function getLenses<C extends HasLenses>(
  codec: C
): { [K in keyof t.TypeOf<C>]: Lens<t.TypeOf<C>, t.TypeOf<C>[K]> } {
  const r: any = {}
  for (const k in getProps(codec)) {
    r[k] = fromProp(k)
  }
  return r
}

// const getPrisms = <U>() =>
//   <K extends keyof U, V extends U[K]>(key: K, value: V) => {
//     new Prism<U, Extract<U, {[_ in K]: V}>>(
//       union => (union[key] === value ? some(union) : none as any),
//       s => s
//     )





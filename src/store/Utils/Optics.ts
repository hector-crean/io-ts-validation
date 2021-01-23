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


export function getLenses<C extends HasLenses>(
  codec: C
): { [K in keyof t.TypeOf<C>]: Lens<t.TypeOf<C>, t.TypeOf<C>[K]> } {
  const r: any = {}
  for (const k in getProps(codec)) {
    r[k] = fromProp(k)
  }
  return r
}


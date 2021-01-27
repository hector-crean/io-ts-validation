import { SkylarkCellState } from './CellState'; 
import { Coordinate } from './Coordinate'; 
import { Int, makeInt } from './Int'

import { Option, some, none } from 'fp-ts/Option'; 
import { Eq, fromEquals } from 'fp-ts/Eq'
import { pipe } from 'fp-ts/function'
import { ordNumber, contramap, getMonoid } from 'fp-ts/Ord'
import { fold } from 'fp-ts/Monoid'

import * as _ from 'fp-ts/Map'

//=====|    Is it preferable to do this with a Record or a Map ? -> Record more useful if to integrate with the db/redux, and 
//=====|    the functionality is basically identical when using fp-ts ... 


interface Key {
    x: number, 
    y: number,
    z: number
}
const eqKey: Eq<Key> = fromEquals((p1,p2) => p1.x === p2.x && p1.y === p2.y && p1.z === p2.z );

const byX = pipe(ordNumber, contramap((k: Key) => k.x));
const byY = pipe(ordNumber, contramap((k: Key) => k.y)); 
const byZ = pipe(ordNumber, contramap((k: Key) => k.z)); 

const M = getMonoid<Key>()
const ordKey = fold(M)([byX, byY, byZ]); 


// ---  MAP IMPLEMENTATION : 

// --- | Global cell states
const globalCellStates_Map = new Map<Key, SkylarkCellState>(); 

// const createKey = (_x: Int, _y: Int, _z: Int) => {return {x: makeInt(_x), y: makeInt(_y), z: makeInt(_z)}}

const val = _.lookupWithKey(eqKey)({x: 2, y: 3, z: 5})(globalCellStates_Map)
// _.updateAt
// _.insertAt

// --- | RECORD IMPLEMENTATION

// const globalCellStates_Record: Record<Key, SkylarkCellState> = 
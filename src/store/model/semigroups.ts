// https://fp-training-app.now.sh/#semigroup



// import { Eq, contramap, getStructEq, eqString } from 'fp-ts/Eq'
// import { array, either } from 'fp-ts'
// import { Either } from 'fp-ts/Either'

// export interface IItem {
//   type: "VALID" | "INVALID";
//   value: string;
// }

// export const eqIItem: Eq<IItem> = getStructEq({
//   type: contramap((t: "VALID" | "INVALID"): string => t)(eqString),
//   value: eqString
// })


// const items: Array<Either<IItem, IItem>> = []

// const uniqItems = uniq(either.getEq(eqIItem, eqIItem))(items)

import {
    Semigroup,
    getStructSemigroup,
    getJoinSemigroup,
    // getMeetSemigroup,
    // semigroupAny, 
    // semigroupSum,
    // getObjectSemigroup
  } from 'fp-ts/Semigroup'
import { getMonoid } from 'fp-ts/Array'
import { ordNumber, contramap } from 'fp-ts/Ord'
import * as R from 'fp-ts/Record'; 


import { Subassemblies, SubassemblyName, Subassembly, Project, Property, Building, EnergyPerformance, Pattern, Owner, TasteProfile, Designer, NormalizedObject } from './types'; 





  const semiGroupDesigner = getStructSemigroup<Designer>({
    id:getJoinSemigroup(contramap((s: string) => s.length)(ordNumber)),
    designerName: getJoinSemigroup(contramap((s: string) => s.length)(ordNumber)),
  })

//   const semiGroupDesigner = getObjectSemigroup<Designer>()

  const semigroupNormalizedProject: Semigroup<NormalizedObject<Designer>>
  = getStructSemigroup({
    byId: R.getMonoid(semiGroupDesigner),
    allIds: getMonoid<string>()
  })

//   const semigroupNormalizedProject: Semigroup<NormalizedObject<Designer>>
//   = getObjectSemigroup()
  

const x: NormalizedObject<Designer> = {
    byId: {
        "1": {
            id: '1',
            designerName: 'Hector'
        }
    },
    allIds: ["1"]
}

const y: NormalizedObject<Designer> = {
    byId: {
        "1": {
            id: '1',
            designerName: 'John'
        }
    },
    allIds: ["1"]
}

 
  

console.log(semigroupNormalizedProject.concat(x,y)); 







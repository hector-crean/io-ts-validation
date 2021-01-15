// https://fp-training-app.now.sh/#semigroup

import { Semigroup, getStructSemigroup, getJoinSemigroup } from 'fp-ts/Semigroup'
import { getMonoid } from 'fp-ts/Array'
import { ordNumber, contramap } from 'fp-ts/Ord'
import * as R from 'fp-ts/Record'; 


import { Subassemblies, SubassemblyName, Subassembly, Project, Property, Building, EnergyPerformance, Pattern, Owner, TasteProfile, Designer } from './types/static-types'; 
import { NormalizedObject} from './types/model-state-action-types'; 




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







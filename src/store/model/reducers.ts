import * as A from "fp-ts/Array";
import * as O from "fp-ts/Option";
import * as R from "fp-ts/Record";
import { eqString } from "fp-ts/lib/Eq";
import { pipe } from "fp-ts/pipeable";
import { Lens } from "monocle-ts";

import { 
  SubassemblyName, ModelState, ModelStateActionTypes, ModelStateActions, IdString, NormalizedSubassemblies, Subassembly, Subassemblies, Building,
  Pattern,
  ReduxProjectState,
  NormalizedObject,
  UUID,
  Owner,
  Property,
  EnergyPerformance,
  TasteProfile,
  Designer


} from './types'; 
// import { ModuleName } from "../../types";


/**
 * CRUD functions 
 * 
addOne: accepts a single entity, and adds it
addMany: accepts an array of entities, and adds them
setAll: accepts an array of entities, and replaces the existing entity contents with the values in the array
removeOne: accepts a single entity ID value, and removes the entity with that ID if it exists
removeMany: accepts an array of entity ID values, and removes each entity with those IDs if they exist
updateOne: accepts an "update object" containing an entity ID and an object containing one or more new field values to update inside a changes field, and updates the corresponding entity
updateMany: accepts an array of update objects, and updates all corresponding entities
upsertOne: accepts a single entity. If an entity with that ID exists, the fields in the update will be merged into the existing entity, with any matching fields overwriting the existing values. If the entity does not exist, it will be added.
upsertMany: accepts an array of entities that will be upserted.
map: accepts a callback function that will be run against each existing entity, and may return a change description object. Afterwards, all changes will be merged into the corresponding existing entities.
 * 

 Many of these can be reproduced using the semigroup operations: 
 
getDualSemigroup
getFirstSemigroup
getFunctionSemigroup
getIntercalateSemigroup
getJoinSemigroup - Get a semigroup where concat will return the maximum, based on the provided order.


getLastSemigroup
getMeetSemigroup - Get a semigroup where concat will return the minimum, based on the provided order.

getObjectSemigroup
getStructSemigroup
getTupleSemigroup
semigroupAll - boolean semigroup under conjunction.

semigroupAny - boolean semigroup under disjunction.


semigroupProduct
semigroupString
semigroupSum
semigroupVoid
 */




////////////
/**
 * Optics
 */

const subassembliesLens = Lens.fromPath<ReduxProjectState>()(["entities", "subassemblies", 'byId']);
const atSubassembly = (id: string) => Lens.fromProp<Record<string, Subassembly>>()(id)

const projectsLens = Lens.fromPath<ReduxProjectState>()(["entities", "subassemblies", 'byId']);
const atProjectLens = (id: string) => Lens.fromProp<Record<string,Subassembly>>()(id)

const ownersLens = Lens.fromPath<ReduxProjectState>()(["entities", "owners", 'byId']);
const atOwners = (id: string) => Lens.fromProp<Record<string, Owner>>()(id)

const propertiesLens = Lens.fromPath<ReduxProjectState>()(["entities", "properties", 'byId']);
const atProperies = (id: string) => Lens.fromProp<Record<string,Property>>()(id)

const buildingsLens = Lens.fromPath<ReduxProjectState>()(["entities", "buildings", 'byId']);
const atBuilding = (id: string) => Lens.fromProp<Record<string, Building>>()(id)

const energyPerformanceLens = Lens.fromPath<ReduxProjectState>()(["entities", "energyPerformance", 'byId']);
const atEnergyPerformance = (id: string) => Lens.fromProp<Record<string, EnergyPerformance>>()(id)

const patLens = Lens.fromPath<ReduxProjectState>()(["entities", "pattern", 'byId']);
const atPattern = (id: string) => Lens.fromProp<Record<string, Pattern>>()(id)


const tasteProfileLens = Lens.fromPath<ReduxProjectState>()(["entities", "tasteProfile", 'byId']);
const atTasteProfile = (id: string) => Lens.fromProp<Record<string, TasteProfile>>()(id)

const designerLens = Lens.fromPath<ReduxProjectState>()(["entities", "designer", 'byId']);
const atDesigner = (id: string) => Lens.fromProp<Record<string, Designer>>()(id)




 export const INITIAL_STATE: ReduxProjectState = {
  entities: {
    projects: {byId: R.empty, allIds: []},
    owners: {byId: R.empty, allIds: []},
    properties: {byId: R.empty, allIds: []},
    buildings: {byId: R.empty, allIds: []},
    subassemblies: {byId: R.empty, allIds: []},
    energyPerformance: {byId: R.empty, allIds: []},
    pattern: {byId: R.empty, allIds: []},
    tasteProfile: {byId: R.empty, allIds: []},
    designer: {byId: R.empty, allIds: []},
  }
 }

 //  Upsert : An operation that inserts rows into a database table if they do not already exist, or updates them if they do.
 //   Each row in a database is associated with an id. In each of these upsert functions, we provide an entire row of data,
 //   including this unique id. If the unique id matches one of an already existing row, then we have to configure rules
 //   of how to update -> do we merge? or do we overwrite? 

 

 /// We can make the upsert function generic and all, but probably best to individually write out the logic... 
 interface Entity{
   id: string;
   [key: string]: any;
 }

declare type Upsert = <E extends Entity, E1, E2, E3>(
  entity: E, 
  lens: Lens<ReduxProjectState, Record<string, E>>, 
  lensor: (id: string) => Lens<Record<string, E>, E>, 
  upsertExternal1: E1 extends E ? Upsert: undefined,
  upsertExternal2: E2 extends E ? Upsert: undefined, 
  upsertExternal3: E3 extends E ? Upsert: undefined
) => (state: ReduxProjectState) => ReduxProjectState

const upsert = <E extends Entity, E1, E2, E3>(
  entity: E, 
  lens: Lens<ReduxProjectState, Record<string, E>>, 
  lensor: (id: string) => Lens<Record<string, E>, E>, 
  // upsertExternal1: E1 extends E ? Upsert: undefined,
  // upsertExternal2: E2 extends E ? Upsert: undefined, 
  // upsertExternal3: E3 extends E ? Upsert: undefined
) => (state: ReduxProjectState): ReduxProjectState => {
   return pipe(
     state,
     R.lookup(entity.id),
     O.fold(
       () => {
         return pipe(
           state,
           lens.compose(lensor(entity.id)).set({...entity})
         )
        },
        (_entity) => {
          return pipe(
            state,
            lens.compose(lensor(entity.id)).modify(
              (prevEntity): E => ({
                ...entity
              }),
              ),
            );
          },
        ),
        // upsertExternal1(),
        // upsertExternal2(),
        // upsertExternal13()
      )
  };
  
     

const upsertSubassembly = (subassembly: Subassembly) => (state: ReduxProjectState): ReduxProjectState => {
  return pipe(
    state,
    R.lookup(subassembly.id),
    O.fold(
      () => {
        return pipe(
          state,
          subassembliesLens.compose(atSubassembly(subassembly.id)).set({ ...subassembly })
        );
      },
      (_subassembly) => {
        return pipe(
          state,
          subassembliesLens.compose(atSubassembly(subassembly.id)).modify(
            (prevSubassembly): Subassembly => ({
              ...subassembly,
              id: prevSubassembly.id //note: we can also do clever things here like use our semigroups to do more complex merging... 
            }),
            ),
          );
        },
      ),
    );
};

const upsertDesigner = (designer: Designer) => (state: ReduxProjectState): ReduxProjectState => {
  return pipe(
    state,
    R.lookup(designer.id),
    O.fold(
      // if the designer IS NOT found in the record database:
      () => {
        return pipe(
          state,
          designerLens.compose(atDesigner(designer.id)).set({ 
            ...designer 
          })
        );
      },
      // if the use IS found in the record database
      (_designer) => {
        return pipe(
          state,
          designerLens.compose(atDesigner(designer.id)).modify(
            (prevDesigner): Designer => ({
              ...designer,
              //note: we can also do clever things here like use our semigroups to do more complex merging... 
            }),
            ),
          );
        },
      ),
    );
};

const upsertTasteProfile = (tasteProfile: TasteProfile) => (state: ReduxProjectState): ReduxProjectState => {
  return pipe(
    state,
    R.lookup(tasteProfile.id),
    O.fold(
      () => {
        return pipe(
          state,
          tasteProfileLens.compose(atTasteProfile(tasteProfile.id)).set({ ...tasteProfile })
        );
      },
      (_tasteProfile) => {
        return pipe(
          state,
          tasteProfileLens.compose(atTasteProfile(tasteProfile.id)).modify(
            (prevTasteProfile): TasteProfile => ({
              ...tasteProfile,
            }),
            ),
          );
        },
      ),
    );
};

const upsertEnergyPerformance = (energyPerformance: EnergyPerformance) => (state: ReduxProjectState): ReduxProjectState => {
  return pipe(
    state,
    R.lookup(energyPerformance.id),
    O.fold(
      () => {
        return pipe(
          state,
          energyPerformanceLens.compose(atEnergyPerformance(energyPerformance.id)).set({ ...energyPerformance })
        );
      },
      (_energyPerformance) => {
        return pipe(
          state,
          energyPerformanceLens.compose(atEnergyPerformance(energyPerformance.id)).modify(
            (prevEnergyPerformance): EnergyPerformance => ({
              ...energyPerformance
            }),
            ),
          );
        },
      ),
    );
};




const upsertOwner = (owner: Owner) => (state: ReduxProjectState): ReduxProjectState => {
  return pipe(
    state,
    R.lookup(owner.id),
    O.fold(
      () => {
        return pipe(
          state,
          ownersLens.compose(atOwners(owner.id)).set({
            ...owner
          })
        )
      },
      (_owner) => {
        return pipe(
          state, 
          ownersLens.compose(atOwners(owner.id)).modify(
            (prevOwner): Owner => ({
              ...owner,
              // how do we want to merge? This is conundrum
            })
          )
        )
      }
    ),
    upsertTasteProfile(owner.ownerTasteProfile)
  )
}


  




 export const reduxProjectReducer = (
   state = INITIAL_STATE,
   action: ModelStateActionTypes
 ): ReduxProjectState => {
  switch(action.type) {
    case ModelStateActions.UPSERT_SUBASSEMBLIES:
      return upsertSubassembly(action.payload.subassembly)(state)
    default:
      return state
  }  
 }
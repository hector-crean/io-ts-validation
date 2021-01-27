import * as A from "fp-ts/Array";
import * as O from "fp-ts/Option";
import * as R from "fp-ts/Record";
import { eqString } from "fp-ts/lib/Eq";
import { pipe } from "fp-ts/pipeable";

import { EditorState } from './types/editor-state-types'
import { ModelStateActionTypes, ModelStateActions } from './types/editor-action-types'; 

// types
import { Container } from './types/Container'
import { 
  Point3, 
  Building,
  Storey,
  EnvelopeSection, 
  Room,
  WallUnit, 
  FloorUnit, 
  RoofUnit,
  Void,
  Active, 
  Inactive,
  // CellState,
  ActiveState
} from './types/CellState'; 
import type { CellState} from './types/CellState'; 

// optics
import {
  fromTraversable,
  Getter,
  Iso,
  Lens,
  Optional,
  Prism,
  Traversal,
} from 'monocle-ts';
import { getLenses } from '../../lib/optics/getLenses';
import { getPrism } from '../../lib/optics/getPrism';



export const INITIAL_STATE: EditorState = {
  entities: {
    containers: {byId: R.empty, allIds: []},

    cellStates: {byId: R.empty, allIds: []},
    // cellLocations?: NormalizedObject<any>
   
  }
 }



////////////
/**
 * Optics
 */

 // ---|  Lens/Prisms : Container


const containerInFocusLens = Lens.fromPath<EditorState>()(["entities", "containers", 'byId']);
const atContainerInFocus = (id: string) => Lens.fromProp<Record<string, Container>>()(id)


const isContainerWithIdFn: (s : string) => (a: Container) => Container =
    s => (a: Container): Container => { return a.id == s ?  {id: a.id, visible: true } :  {id: a.id, visible: false } }
    
const containerLens = Lens.fromPath<EditorState>()(["entities", "containers", "byId"]);
const recordTraversal = fromTraversable(R.record)<Container>();
const composedRecordTraversal = containerLens.composeTraversal(recordTraversal)


// ---|  Lens/Prisms : Skylark Cell State
const cellStateLens = Lens.fromPath<EditorState>()(["entities", 'cellStates', 'byId']);
const atCellState = (id: string) => Lens.fromProp<Record<string, CellState>>()(id)


const cellStatePrism = getPrism<CellState>()

const activeLenses = getLenses(Active)
const inactiveLenses = getLenses(Inactive)

const activeStatePrisms = getPrism<ActiveState>()

const buildingLenses = getLenses(Building)
const storeyLenses = getLenses(Storey)
const envelopeSectionsLenses = getLenses(EnvelopeSection)
const roomLenses = getLenses(Room)
const wallUnitLenses = getLenses(WallUnit)
const floorUnitLenses = getLenses(FloorUnit)
const roofUnitLenses = getLenses(RoofUnit)
const voidLenses = getLenses(Void)
// const activeStateLens = getLenses(ActiveState)




////////////
/**
 * Actions
 */


 // ---|  Actions : Container

const bringContainerIntoFocus = (containerInFocus: Container) => (state: EditorState): EditorState => {
  // traverse the container records and change the visibility of all non chosen containers to invisible
  const modificationPredicate = isContainerWithIdFn(containerInFocus.id)
  return composedRecordTraversal.modify(modificationPredicate)(state)
};

const bringAllContainersIntoFocus = () => (state: EditorState): EditorState => {
  // traverse the container records and change the visibility of all non chosen containers to invisible
  return composedRecordTraversal.modify( (a: Container) => {return {id: a.id, visible: true }} ) (state)
};


 // ---|  Actions : SkylarkCellState


const upsertCellState = <E extends CellState>(
 entity: E, 
 lens: Lens<EditorState, Record<string, E>>, 
 lensor: (id: string) => Lens<Record<string, E>, E>, 
) => (state: EditorState): EditorState => {
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
     )
 };



 export const editorReducer = (
   state = INITIAL_STATE,
   action: ModelStateActionTypes
 ): EditorState => {
  switch(action.type) {
    case ModelStateActions.BRING_CONTAINER_INTO_FOCUS:
      return bringContainerIntoFocus(action.payload.containerInFocus)(state)
    case ModelStateActions.BRING_ALL_CONTAINERS_INTO_FOCUS:
      return bringAllContainersIntoFocus()(state)
    
    case ModelStateActions.UPSERT_CELL_STATE:
      return upsertCellState(action.payload.cell, cellStateLens, atCellState)(state)
      ; 
    default:
      return state
  }  
}
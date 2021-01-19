import * as A from "fp-ts/Array";
import * as O from "fp-ts/Option";
import * as R from "fp-ts/Record";
import { eqString } from "fp-ts/lib/Eq";
import { pipe } from "fp-ts/pipeable";

import { ModelStateActionTypes, ModelStateActions, EditorState } from './types/model-state-action-types'
import { Container } from './types/static-types'


import {
  fromTraversable,
  Getter,
  Iso,
  Lens,
  Optional,
  Prism,
  Traversal,
} from 'monocle-ts';




////////////
/**
 * Optics
 */

const containerInFocusLens = Lens.fromPath<EditorState>()(["entities", "containers", 'byId']);
const atContainerInFocus = (id: string) => Lens.fromProp<Record<string, Container>>()(id)


const isContainerWithIdFn: (s : string) => (a: Container) => Container =
    s => (a: Container): Container => { return a.id == s ?  {id: a.id, visible: true } :  {id: a.id, visible: false } }
    
const containerLens = Lens.fromPath<EditorState>()(["entities", "containers", "byId"]);
const recordTraversal = fromTraversable(R.record)<Container>();
const composedRecordTraversal = containerLens.composeTraversal(recordTraversal)


 export const INITIAL_STATE: EditorState = {
  entities: {
    containers: {byId: R.empty, allIds: []},
   
  }
 }


 const bringContainerIntoFocus = (containerInFocus: Container) => (state: EditorState): EditorState => {
  // traverse the container records and change the visibility of all non chosen containers to invisible
  const modificationPredicate = isContainerWithIdFn(containerInFocus.id)
  return composedRecordTraversal.modify(modificationPredicate)(state)
};

const bringAllContainersIntoFocus = () => (state: EditorState): EditorState => {
  // traverse the container records and change the visibility of all non chosen containers to invisible
  return composedRecordTraversal.modify( (a: Container) => {return {id: a.id, visible: true }} ) (state)
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
    default:
      return state
  }  
}
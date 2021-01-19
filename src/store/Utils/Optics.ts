
import {
    fromTraversable,
    Getter,
    Iso,
    Lens,
    Optional,
    Prism,
    Traversal,
  } from 'monocle-ts';
// import { EditorState } from '../Editor/types/model-state-action-types'; 
// import { Container } from '../Editor/types/static-types'; 

// import * as A from 'fp-ts/Array'
// import * as R from 'fp-ts/Record'



// const isContainerWithIdFn: (s : string) => (a: Container) => Container =
//     s => (a: Container): Container => { return a.id == s ?  {id: a.id, visible: true } :  {id: a.id, visible: false }
    
// const f = (a: Container): Container => { return a.id =='' ?  {id: a.id, visible: true } :  {id: a.id, visible: false }
// const containerLens = Lens.fromPath<EditorState>()(["entities", "containers", "byId"]);
// const recordTraversal = fromTraversable(R.record)<Container>();
// const composedRecordTraversal = containerLens.composeTraversal(recordTraversal).modify(isContainerWithIdFn(''))

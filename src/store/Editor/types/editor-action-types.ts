import { Container } from './Container'; 

import { CellState } from './CellState'; 

/**
 * Actions 
 */


// ->> CRUD operations on a normalized state structure
 
export enum ModelStateActions {
    BRING_CONTAINER_INTO_FOCUS = "BRING_CONTAINER_INTO_FOCUS",
    BRING_ALL_CONTAINERS_INTO_FOCUS = "BRING_ALL_CONTAINERS_INTO_FOCUS",

    UPSERT_CELL_STATE = "UPSERT_CELL_STATE"
 }


 // --| Container Actions
 
 interface BringContainerIntoFocusAction {
   type: typeof ModelStateActions.BRING_CONTAINER_INTO_FOCUS
   payload: { containerInFocus: Container }
 }
 
 interface BringAllContainerIntoFocusAction {
   type: typeof ModelStateActions.BRING_ALL_CONTAINERS_INTO_FOCUS
 }

 // --| Cell state actions
 interface UpsertCellState {
   type: typeof ModelStateActions.UPSERT_CELL_STATE
   payload: { cell: CellState}
 }

 
 
 
 
 export type ModelStateActionTypes = 
 | BringContainerIntoFocusAction
 | BringAllContainerIntoFocusAction
 | UpsertCellState
 
 
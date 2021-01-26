
import { Int } from '../Data/Int';
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
    SkylarkCellState,
    ActiveState
} from '../Data/CellState'
import { getLenses } from './getLenses';
import { getPrism } from './getPrism'
import { Coordinate } from '../Data/Coordinate'; 
// --- Int represents the natural unit of the grid (i.e the unit length in one direcrion.). This obiously only works for symstems that
// --- have the cosistent sizings...

// https://www.freecodecamp.org/news/typescript-curry-ramda-types-f747e99744ab/

import { skylarkInitialStateActive , skylarkInitialStateInactive} from '../Data/CellState'; 


// const GridCoordinateBasisRepresentation = {x: new Map<Number, Int>(), y: new Map<Number, Int>(), z: new Map<Number, Int>()}



// --- | Global cell states
const globalCellStates = new Map<Coordinate, SkylarkCellState>(); 




// ---|  Prisms 

const skylarkCellStatePrisms = getPrism<SkylarkCellState>()

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



// ---| Actions 

type ActionType_modify = 
| {_tag: 'addFloors', payload: {additionalFloors: number}}
| {_tag: 'removeFloors', payload: {removedFloors: number}}
| {_tag: ''};

const addFloorsAction = (n: number): ActionType_modify => {return {_tag: 'addFloors', payload: {additionalFloors: n}} }
const removeFloorsAction = (n: number): ActionType_modify => {return {_tag: 'removeFloors', payload: {removedFloors: n}} }


// --- | some of the states are non-orthogonal --> 
// --- | Orthogonal — such that there’s no overlap in capabilities between primitives (i.e. MECE or the single-responsibility principle);
// --- | mutually exclusive, collectively exhaustive domain model primitives would be usefull..

// -- | currently it fails silently if an action type is not applicable to a particular voxel cell
export const stateOperator = (action: ActionType_modify) => (state: SkylarkCellState): SkylarkCellState => {
    switch(action._tag){
        //Building,
        case 'addFloors':
            const addFloorFn = (n: number) => (building: Building): Building => {return {...building, floors: building.floors+n} };
            const addFloor = addFloorFn(action.payload.additionalFloors);

            return skylarkCellStatePrisms('_tag', 'Active')
            .composeLens(activeLenses.active_state)
            .composePrism(activeStatePrisms('_tag','Building'))
            .modify(addFloor)(state);
        
        case 'removeFloors':
            const removeFloorsFn = (n: number) => (building: Building): Building => {return {...building, floors: building.floors+n} };
            const removeFloors = removeFloorsFn(action.payload.removedFloors);

            return skylarkCellStatePrisms('_tag', 'Active')
            .composeLens(activeLenses.active_state)
            .composePrism(activeStatePrisms('_tag','Building'))
            //here we need to perform stencil Fn checks on the peripehy elements... 
            .modify(removeFloors)(state);
        //Storey,
        // EnvelopeSection - > one we're most inerested in at the moment 
        // Room,
        // WallUnit, 
        // FloorUnit, 
        // RoofUnut,
        // Void

        default: 
            throw new Error('no matching function for action')
            return state; 
    }
}

// const newstate = operator(addFloorsAction(2))(skylarkInitialStateInactive)
// console.log(newstate); 


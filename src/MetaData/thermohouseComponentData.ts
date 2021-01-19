import * as F from 'fp-ts/function'


// Thermohouse components 
///////////////////////

interface IDimensions {
    length: number;
    height: number;
    width: number
    unit: 'mm' | 'cm' | 'm'
}


enum ComponentFamily { 
    Wall = 'Wall',
    Floor = 'Floor',
    Roof = 'Roof'
}
// enum WallTypes {
//     Internal = 'Internal',
//     External = 'External',
//     Basement = 'Basement',
//     PartyWall = 'PartyWall'
// }


type th_Wall = {
        id: TH_Component
        family: ComponentFamily.Wall
        type: 'Internal' | 'External' | 'Basement' | 'PartyWall' | 'Lintel'
        endType: 'L' | 'R' | 'noEnds' | 'L/R' //'L/R' is where the symmetry of the block means it coudl be either
        dimensions: IDimensions
    }

type th_Floor = {
        id: string
        family: ComponentFamily.Floor
        dimensions: IDimensions
    }
type th_Roof = {
        id: string
        family: ComponentFamily.Roof
        dimensions: IDimensions
    }
export type ThermohouseComponent = th_Wall | th_Floor | th_Roof 


export const fold_TH_state = <ReturnType extends any>(
  a: (state: th_Wall) => ReturnType,
  b: (state: th_Floor) => ReturnType,
  c: (state: th_Roof) => ReturnType,
) => (state: ThermohouseComponent): ReturnType => {
  switch(state.family) {
    case ComponentFamily.Wall:
        return a(state);
    case ComponentFamily.Floor:
        return b(state);
    case ComponentFamily.Roof:
        return c(state);
    default:
        return F.absurd(state);
  }
};

// const logType = fold(
//     (state) => console.log(state.type),
//     (state) => console.log(state.type),
//     (state) => console.log(state.type),
//     (state) => console.log(state.type),
// );



export type TH_Component =
    /// Internal walls
    | 'TH-8' //no ends
    | 'TH-9'  //one end

    /// External Walls
    // -> thicker part to outside. if view from outside, L means to the left; R means to the right
    | 'TH-16'   //no ends
    | 'TH-17L'  //ends to left
    | 'TH-17R'  //end to right
    // 'TH-17RL', 'TH-17RR', 

    /// Party walls
    | 'TH-38'
    | 'TH-39'

    //Basement walls
    | 'TH-46'
    | 'TH-47L'
    | 'TH-47R'
    // 'TH-47RL', 'TH-47RR', 

    /// Lintel
    | 'TH-57'
    | 'TH-58' 


    // TODO: add additional data 
    

export const thermohouseComponentLibrary: Record<TH_Component, ThermohouseComponent> = {
    'TH-8': {  
        id: 'TH-8', 
        family: ComponentFamily.Wall,
        type: 'Internal',
        endType: 'noEnds',
        dimensions: {length: 1.2, width: 0.25, height: 0.25, unit: 'm'}
    },
    'TH-9': {   
        id: 'TH-9',
        family: ComponentFamily.Wall,
        type: 'Internal',
        endType: 'L/R',
        dimensions: {length: 1.2, width: 0.25, height: 0.25, unit: 'm'}
    },
    'TH-16': {   
        id: 'TH-16',
        family: ComponentFamily.Wall,
        type: 'External',
        endType: 'noEnds',
        dimensions: {length: 1.2, width: 0.35, height: 0.25, unit: 'm'}
    },
    'TH-17L': {   
        id: 'TH-17L',
        family: ComponentFamily.Wall,
        type: 'External',
        endType: 'L',
        dimensions: {length: 1.2, width: 0.35, height: 0.25, unit: 'm'}
    },
    'TH-17R': {   
        id: 'TH-17R',
        family: ComponentFamily.Wall,
        type: 'External',
        endType: 'R',
        dimensions: {length: 1.2, width: 0.35, height: 0.25, unit: 'm'}
    },
    'TH-38': {   
        id: 'TH-38',
        family: ComponentFamily.Wall,
        type: 'PartyWall',
        endType: 'noEnds',
        dimensions: {length: 1.2, width: 0.35, height: 0.25, unit: 'm'}
    },
    'TH-39': { 
        id: 'TH-39',  
        family: ComponentFamily.Wall,
        type: 'PartyWall',
        endType: 'L/R',
        dimensions: {length: 1.2, width: 0.35, height: 0.25, unit: 'm'}
    },
    'TH-46': {   
        id: 'TH-46',
        family: ComponentFamily.Wall,
        type: 'Basement',
        endType: 'noEnds',
        dimensions: {length: 1.2, width: 0.35, height: 0.25, unit: 'm'}
    },
    'TH-47L': {  
        id: 'TH-47L', 
        family: ComponentFamily.Wall,
        type: 'Basement',
        endType: 'L',
        dimensions: {length: 1.2, width: 0.35, height: 0.25, unit: 'm'}
    },
    'TH-47R': {   
        id: 'TH-47R',
        family: ComponentFamily.Wall,
        type: 'Basement',
        endType: 'R',
        dimensions: {length: 1.2, width: 0.35, height: 0.25, unit: 'm'}
    },
    'TH-57': {   
        id: 'TH-57',
        family: ComponentFamily.Wall,
        type: 'Lintel',
        endType: 'noEnds',
        dimensions: {length: 1.2, width: 0.5, height: 1.5, unit: 'm'}
    },
    'TH-58': {   
        id: 'TH-58',
        family: ComponentFamily.Wall,
        type: 'Lintel',
        endType: 'noEnds',
        dimensions: {length: 1.2, width: 0.5, height: 2, unit: 'm'}
    },
}


    

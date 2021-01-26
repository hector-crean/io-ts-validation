
export type ComponentState = {_tag: 'chosen', component: IBuildingComponent} | {_tag: 'unChosen'}

export const matchComponentState = <R1 extends any, R2 extends any >(
    onChosen: (component: IBuildingComponent) => R1,
    onUnChosen: () => R2
) => (state: ComponentState): R1 | R2 => {
    switch (state._tag) {
      case 'chosen':
        return onChosen(state.component)
      case 'unChosen':
        return onUnChosen()
    }
  }


export interface IBuildingComponent  {
    moduleName: string; 
    dimensions: IDimensions; 
    buildingSystem: BuildingSystem
    locationClass: LocationClass
    roofProperties?: IRoofProperties
    cost: Cost, 
    assemblyTime: AssemblyTime   
    
    mass?: number; 
    materialVolume?: number;
    numberOfPlySheets?: number; 
    onShapeLink?: string; 
    version?: `v${number}.${number}`
    description?: string


}

export const makeComponent = (
    moduleName: string,
    dimensions: IDimensions,
    buildingSystem: BuildingSystem,
    locationClass: LocationClass,
    roofProperties: IRoofProperties,
    cost: Cost,
    assemblyTime: AssemblyTime
): IBuildingComponent => {return {moduleName, dimensions, buildingSystem, locationClass, roofProperties, cost, assemblyTime}}

export enum BuildingSystem {
    WikiHouseSwift = 'WikiHouseSwift',
    WikihouseSkylark = 'WikihouseSkylark',
    WikihouseWren = 'WikihouseWren',
    Thermohouse = 'Thermohouse'
}

type Cost = {amount: number, currency: 'Euros' | 'Pound Sterling' | 'Dollars'}
type AssemblyTime =  {time: number, units: 'hours' | 'days' | 'months'}

export interface IDimensions { //Generally for the 'container' 
// Note: beware that in three.js, Y is 'up'. 
    X: number;
    Y: number;
    Z: number;
    W?: number //thickness 
    unit: 'mm' | 'cm' | 'm'
}

export enum LocationClass {
    Site = 'Site',
    Building = 'Building',
    EnvelopeSection = 'EnvelopeSection',
    Floor = 'Floor',
    Room = 'Room',
    Wall = 'Wall',
    Roof = 'Roof',
    Ceiling = 'Ceiling',
    Window = 'Window',
    Doorway = 'Doorway',
    Void = 'Void'
    //U-Shape, L-shape, etc. 
}

export enum RoofTypes{
    DualCentre = 'Dual-centre' ,
    Mono = 'Mono',
    Assymetric = 'Asymetric', 
    Parapet = 'Parapet' ,
    Flat = 'Flat'
}

export interface IRoofProperties {
    roofPitchType: RoofTypes
    pitchAngle1: number; 
    pitchAngle2: number; 
}

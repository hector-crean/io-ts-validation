

export interface IBuildingComponent  {
    moduleName: string; 
    dimensions: IDimensions; 
    buildingSystem: BuildingSystem
    locationClass: LocationClass
    roofProperties?: IRoofProperties
    cost: {amount: number, currency: 'Euros' | 'Pound Sterling' | 'Dollars'}; 
    assemblyTime: {time: number, units: 'hours' | 'days' | 'months'}; 

    mass?: number; 
    materialVolume?: number;
    numberOfPlySheets?: number; 
    onShapeLink?: string; 
    version?: `v${number}.${number}`
    description?: string
}


export enum BuildingSystem {
    WikiHouseSwift = 'WikiHouseSwift',
    WikihouseSkylark = 'WikihouseSkylark',
    WikihouseWren = 'WikihouseWren',
    Thermohouse = 'Thermohouse'
}

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
    Ceiling = 'Ceiling',
    Roof = 'Roof',
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

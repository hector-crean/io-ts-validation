import { IBuildingComponent, RoofTypes, IRoofProperties, BuildingSystem, IDimensions, LocationClass
} from '../types/componentTypes'; 



/**
 *  3D software packages often use different coordinate bases. (i.e. right handed vs. left handed). Also often
 *  a discrepancy in whether -y or -z direction is deemend 'up'. 
 * 
 *  When modelling our components, we also need to set an appropriate origin, in order that we can easily transoform 
 *  the component. (by transform we mean some composition of translation/rotation.) We need to bear in mind that
 *  these components often must click/fit together with another compoennt, and decide whether or not we deem the fitting
 *  joints to be extensions to the main body of the component, etc. 
 * 
 *   See () for a visual explanation. 
 * 
 * 
 */


// Repository of skylark data: https://www.notion.so/c6f7bf7a16cf4cec822012a2eb314d5d?v=fe1cede6b7774c3c80606b2a73086c02



// Skylark windows: width: 0.6m, 1.2m, 1.8m, .. 
// Skylark rooflights: width: PITCHED 0.6m, 1.2m, FLAT 0.6m, 1.2m, 
// Floor Beam
// Floor Casette
// Wall beam
// Wall casette (+custom)

/**
 * BLOCK (i.e. for under)
 * FLOOR_5.3m, FLOOR_4.0m
 * BEAM_5.3m
 * POST_2.4m, POST_3.0m
 * WALL_0.6m, WALL_0.5m, WALL_2.4m, WALL_3.0m
 * LINTEL_1.2m
 */




export enum SkylarkModule {
    //'North' facing
    N_DOOR_12x24x025m = 'N_DOOR_12x24x025m', 
    N_DOOR_12x3x025m = 'N_DOOR_12x3x025m',
    N_L_WALL_POST_025x30x025m = 'N_L_WALL_POST_025x30x025m',
    N_WALL_CST_06x24x025m = 'N_WALL_CST_06x24x025m',
    N_WINDOW_12x24x025m = 'N_WINDOW_12x24x025m',

    // //'South' Facing
    // S_DOOR_12x24x025m = 'S_DOOR_12x24x025m',
    // S_DOOR_12x3x025m = 'S_DOOR_12x3x025m',
    // S_L_WALL_POST_025x24x025m = 'S_L_WALL_POST_025x24x025m',
    // S_L_WALL_POST_025x30x025m = 'S_L_WALL_POST_025x30x025m',
    // S_R_WALL_POST_025x24x025m = 'S_R_WALL_POST_025x24x025m',
    // S_R_WALL_POST_025x30x025m = 'S_R_WALL_POST_025x30x025m',
    // S_WALL_CST_06x24x025m = 'S_WALL_CST_06x24x025m',
    // S_WALL_CST_06x30x025m = 'S_WALL_CST_06x30x025m',
    // S_WINDOW_06x24x025m = 'S_WINDOW_06x24x025m',
    // S_WINDOW_12x24x025m = 'S_WINDOW_12x24x025m',
    // S_WINDOW_24x24x025m = 'S_WINDOW_24x24x025m',

    //'North/South' Facing (i.e. symmetrical)
    N_S_BLOCK = 'N_S_BLOCK',
    N_S_FLOOR_BEAM = 'N_S_FLOOR_BEAM',
    N_S_FLOOR_CST = 'N_S_FLOOR_CST',
    N_S_HOC_ROOF_END = 'N_S_HOC_ROOF_END',
    N_S_HOC_ROOF_MID = 'N_S_HOC_ROOF_MID',
    // N_S_LINTEL = 'N_S_LINTEL',
    N_S_WINDOW_24x24x025m_full = 'N_S_WINDOW_24x24x025m_full',

    // //'East' facing
    // E_DOOR_12x24x025m = 'E_DOOR_12x24x025m', 
    // E_DOOR_12x3x025m = 'E_DOOR_12x3x025m', 
    // E_ROOM_BLK = 'E_ROOM_BLK', 
    // E_WALL_CST_06x24x025m = 'E_WALL_CST_06x24x025m',
    // E_WALL_CST_06x3x025m = 'E_WALL_CST_06x3x025m',
    // E_WINDOW_06x24x025m = 'E_WINDOW_06x24x025m',
    // E_WINDOW_106x24x025m = 'E_WINDOW_106x24x025m',
    // E_WINDOW_12x24x025m = 'E_WINDOW_12x24x025m',

    // //'West' facing
    // W_DOOR_12x24x025m = 'W_DOOR_12x24x025m',
    // W_DOOR_12x3x025m = 'W_DOOR_12x3x025m',
    // W_ROOF_BLK = 'W_ROOF_BLK',
    // W_WALL_CST_06x24x025m = 'W_WALL_CST_06x24x025m',
    // W_WALL_CST_06x30x025m = 'W_WALL_CST_06x30x025m',
    // W_WINDOW_06x24x025m = 'W_WINDOW_06x24x025m',
    // W_WINDOW_12x24x025m = 'W_WINDOW_12x24x025m',

    // //'East/West' facing
    // E_W_WINDOW_24x24x025m = 'E_W_WINDOW_24x24x025m',
    // E_W_WINDOW_24x24x025m_full = 'E_W_WINDOW_24x24x025m_full',
    // E_W_BLK = 'E_W_BLK',
    // E_W_LINTEL = 'E_W_LINTEL',
   
}

/**
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
 */


export const skyLarkComponentLibrary: IBuildingComponent[] = [
  
    
    {
        moduleName: SkylarkModule.N_DOOR_12x24x025m,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Doorway,
        dimensions: {X: 1.2, Y:  2.4, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    {
        moduleName: SkylarkModule.N_DOOR_12x3x025m,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Doorway,
        dimensions: {X: 1.2, Y:  3, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    {
        moduleName: SkylarkModule.N_L_WALL_POST_025x30x025m,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Wall,
        dimensions: {X: 0.25, Y:  3, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    {
        moduleName: SkylarkModule.N_S_BLOCK,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Wall,
        //*
        dimensions: {X: 0.6, Y:  0.35, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    {
        moduleName: SkylarkModule.N_S_FLOOR_BEAM,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Floor,
        //*
        dimensions: {X: 5.4, Y:  0.34, Z: 0.2, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    {
        moduleName: SkylarkModule.N_S_FLOOR_CST,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Floor,
        //*
        dimensions: {X: 5.4, Y:  0.34, Z: 0.6, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    {
        moduleName: SkylarkModule.N_S_HOC_ROOF_MID,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Roof,
        //*
        dimensions: {X: 5.4, Y:  0.95, Z: 1.2, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    {
        moduleName: SkylarkModule.N_S_HOC_ROOF_END,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Roof,
        //*
        dimensions: {X: 5.4, Y:  0.95, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    // {
    //     moduleName: SkylarkModule.N_S_LINTEL,
    //     buildingSystem: BuildingSystem.WikihouseSkylark,
    //     locationClass: LocationClass.Window,
    //     //*
    //     dimensions: {X: 5.4, Y:  0.95, Z: 0.25, unit: 'm'},
    //     onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
    //     version: 'v1.1',
    //     description: '',
        
    //     //TODO: 
    //     cost: {amount: 0.00, currency: 'Euros'},
    //     assemblyTime: {time: 0, units: 'days'},
    //     mass: 0,
    //     materialVolume: 0,
    //     numberOfPlySheets: 0, 
        
    // },

    {
        moduleName: SkylarkModule.N_S_WINDOW_24x24x025m_full,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Window,
        //*
        dimensions: {X: 2.4, Y:  2.4, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    {
        moduleName: SkylarkModule.N_WALL_CST_06x24x025m,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Wall,
        //*
        dimensions: {X: 0.6, Y:  2.4, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    {
        moduleName: SkylarkModule.N_WINDOW_12x24x025m,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Window,
        //*
        dimensions: {X: 1.2, Y:  2.4, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

   
]


export const skylarkComponentRecord: Record<SkylarkModule, IBuildingComponent> = {
    // For each building system, we create a database of relevant 'meta-data', which specifies the properties of the building blocks,
    // which make up the building.

    // For instance: we add information about the: 'roof properties', or the 'cost' of manufacture

    //Module_A1_*
    [SkylarkModule.N_DOOR_12x24x025m]: {
        moduleName: SkylarkModule.N_DOOR_12x24x025m,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Doorway,
        dimensions: {X: 1.2, Y:  2.4, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    [SkylarkModule.N_DOOR_12x3x025m]: {
        moduleName: SkylarkModule.N_DOOR_12x3x025m,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Doorway,
        dimensions: {X: 1.2, Y:  3, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    [SkylarkModule.N_L_WALL_POST_025x30x025m]:{
        moduleName: SkylarkModule.N_L_WALL_POST_025x30x025m,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Wall,
        dimensions: {X: 0.25, Y:  3, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    [SkylarkModule.N_S_BLOCK]:{
        moduleName: SkylarkModule.N_S_BLOCK,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Wall,
        //*
        dimensions: {X: 0.6, Y:  0.35, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    [SkylarkModule.N_S_FLOOR_BEAM]:{
        moduleName: SkylarkModule.N_S_FLOOR_BEAM,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Floor,
        //*
        dimensions: {X: 5.4, Y:  0.34, Z: 0.2, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    [SkylarkModule.N_S_FLOOR_CST]:{
        moduleName: SkylarkModule.N_S_FLOOR_CST,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Floor,
        //*
        dimensions: {X: 5.4, Y:  0.34, Z: 0.6, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    [SkylarkModule.N_S_HOC_ROOF_MID]:{
        moduleName: SkylarkModule.N_S_HOC_ROOF_MID,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Roof,
        //*
        dimensions: {X: 5.4, Y:  0.95, Z: 1.2, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    [SkylarkModule.N_S_HOC_ROOF_END]:{
        moduleName: SkylarkModule.N_S_HOC_ROOF_END,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Roof,
        //*
        dimensions: {X: 5.4, Y:  0.95, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    // {
    //     moduleName: SkylarkModule.N_S_LINTEL,
    //     buildingSystem: BuildingSystem.WikihouseSkylark,
    //     locationClass: LocationClass.Window,
    //     //*
    //     dimensions: {X: 5.4, Y:  0.95, Z: 0.25, unit: 'm'},
    //     onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
    //     version: 'v1.1',
    //     description: '',
        
    //     //TODO: 
    //     cost: {amount: 0.00, currency: 'Euros'},
    //     assemblyTime: {time: 0, units: 'days'},
    //     mass: 0,
    //     materialVolume: 0,
    //     numberOfPlySheets: 0, 
        
    // },

    [SkylarkModule.N_S_WINDOW_24x24x025m_full]:{
        moduleName: SkylarkModule.N_S_WINDOW_24x24x025m_full,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Window,
        //*
        dimensions: {X: 2.4, Y:  2.4, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    [SkylarkModule.N_WALL_CST_06x24x025m]:{
        moduleName: SkylarkModule.N_WALL_CST_06x24x025m,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Wall,
        //*
        dimensions: {X: 0.6, Y:  2.4, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },

    [SkylarkModule.N_WINDOW_12x24x025m]:{
        moduleName: SkylarkModule.N_WINDOW_12x24x025m,
        buildingSystem: BuildingSystem.WikihouseSkylark,
        locationClass: LocationClass.Window,
        //*
        dimensions: {X: 1.2, Y:  2.4, Z: 0.25, unit: 'm'},
        onShapeLink: 'https://cad.onshape.com/documents/470d6958e6b909240ec27e76/w/250dd5063d4fd258c3bbd5d5/e/89b4cd3b52d79bf9321385ca',
        version: 'v1.1',
        description: '',
        
        //TODO: 
        cost: {amount: 0.00, currency: 'Euros'},
        assemblyTime: {time: 0, units: 'days'},
        mass: 0,
        materialVolume: 0,
        numberOfPlySheets: 0, 
        
    },


}
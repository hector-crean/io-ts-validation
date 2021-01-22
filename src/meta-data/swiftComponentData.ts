import { IBuildingComponent, RoofTypes, IRoofProperties, BuildingSystem, IDimensions, LocationClass
} from '../types/componentTypes'; 




export enum SwiftModule {
    Module_A1_05 = 'Module_A1_05',
    Module_A1_04 = 'Module_A1_04',
    Module_A1_03 = 'Module_A1_03',
    Module_A1_02 = 'Module_A1_02',
    Module_A1_01 = 'Module_A1_01',

    Module_A2_05 = 'Module_A2_05',
    Module_A2_04 = 'Module_A2_04',
    Module_A2_03 = 'Module_A2_03',
    Module_A2_02 = 'Module_A2_02',
    Module_A2_01 = 'Module_A2_01',

    Module_B1_07 = 'Module_B1_07',
    Module_B1_06 = 'Module_B1_06',
    Module_B1_05 = 'Module_B1_05',
    Module_B1_04 = 'Module_B1_04',
    Module_B1_03 = 'Module_B1_03',
    Module_B1_02 = 'Module_B1_02',
    Module_B1_01 = 'Module-B1_01',

    Module_B2_07 = 'Module_B2_07',
    Module_B2_06 = 'Module_B2_06',
    Module_B2_05 = 'Module_B2_05',
    Module_B2_04 = 'Module_B2_04',
    Module_B2_03 = 'Module_B2_03',
    Module_B2_02 = 'Module_B2_02',
    Module_B2_01 = 'Module_B2_01',

    Module_C1_05 = 'Module_C2_05',
    Module_C1_04 = 'Module_C1_04',
    Module_C1_03 = 'Module_C1_03',
    Module_C1_02 = 'Module_C1_02',
    Module_C1_01 = 'Module_C1_01',

    Module_C2_05 = 'Module_C2_05',
    Module_C2_04 = 'Module_C2_04',
    Module_C2_03 = 'Module_C2_03',
    Module_C2_02 = 'Module_C2_02',
    Module_C2_01 = 'Module_C2_01',

    Module_D1_04 = 'Module_D1_04',
    Module_D1_03 = 'Module_D1_03',
    Module_D1_02 = 'Module_D1_02',
    Module_D1_01 = 'Module_D1_01',

    Module_E1_04 = 'Module_E1_04',
    Module_E1_03 = 'Module_E1_03',
    Module_E1_02 = 'Module_E1_02',
    Module_E1_01 = 'Module_E1_01',
}

export const swiftComponentLibrary: IBuildingComponent[] = [
  
    //Module_A1_*
    {
        moduleName: SwiftModule.Module_A1_05,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 3.3, Y:  5.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 695.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_A1_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 2.1, Y:  5.1, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 691.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_A1_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 3.3, Y:  5.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 760.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_A1_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 4.5, Y:  5.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 792.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_A1_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 5.7, Y:  5.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 819.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    //Module_A2_*
    {
        moduleName: SwiftModule.Module_A2_05,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 3.3, Y:  8.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 1059.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_A2_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 2.1, Y: 8.1, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 885.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_A2_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 3.3, Y:  8.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 1050.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_A2_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 4.5, Y:  8.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 1077.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_A2_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 5.7, Y:  8.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 1106.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    //Module_B1_*
    {
        moduleName: SwiftModule.Module_B1_07,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  4.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 599.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_B1_06,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 4.5, Y:  5.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 699.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_B1_05,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  5.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 639.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_B1_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 2.1, Y:  5.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 539.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_B1_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  5.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 618.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_B1_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 4.5, Y:  5.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 659.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_B1_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 5.7, Y:  5.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 639.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    //Module_B2_*
    {
        moduleName: SwiftModule.Module_B2_07,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  8.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 877.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_B2_06,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 4.5, Y:  8.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 982.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_B2_05,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  8.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 925.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_B2_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 2.1, Y:  8.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 755.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_B2_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  8.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 897.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_B2_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 4.5, Y:  8.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 962.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_B2_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 5.7, Y:  8.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 975.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },

    //Module_C1_*
    {
        moduleName: SwiftModule.Module_C1_05,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 975.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_C1_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 2.1, Y:  4.2, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 975.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_C1_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 975.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_C1_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 4.5, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 975.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_C1_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 5.7, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 975.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },

    // Module_C2_*
    {
        moduleName: SwiftModule.Module_C2_05,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  7.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 871.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_C2_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 2.1, Y:  7.2, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 696.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_C2_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  7.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 863.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_C2_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 4.5, Y:  7.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 935.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_C2_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 5.7, Y:  7.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 945.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },

    //Module_D1_*
    {
        moduleName: SwiftModule.Module_D1_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Parapet,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 2.1, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 898.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_D1_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Parapet,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 3.3, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 1063.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_D1_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Parapet,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 4.5, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 1172.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_D1_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Parapet,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 5.7, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 1135.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    //Module_E1_*
    {
        moduleName: SwiftModule.Module_E1_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Flat,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 2.1, Y:  3.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 596.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_E1_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Flat,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 3.3, Y:  3.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 717.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_E1_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Flat,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 5.5, Y:  3.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 782.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    {
        moduleName: SwiftModule.Module_E1_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Flat,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 5.7, Y:  3.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 661.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
]


export const swiftComponentRecord: Record<SwiftModule, IBuildingComponent> = {
    // For each building system, we create a database of relevant 'meta-data', which specifies the properties of the building blocks,
    // which make up the building.

    // For instance: we add information about the: 'roof properties', or the 'cost' of manufacture

    //Module_A1_*
    [SwiftModule.Module_A1_05]: {
        moduleName: SwiftModule.Module_A1_05,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 3.3, Y:  5.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 695.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_A1_04]:{
        moduleName: SwiftModule.Module_A1_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 2.1, Y:  5.1, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 691.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_A1_03]:{
        moduleName: SwiftModule.Module_A1_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 3.3, Y:  5.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 760.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_A1_02]:{
        moduleName: SwiftModule.Module_A1_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 4.5, Y:  5.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 792.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_A1_01]:{
        moduleName: SwiftModule.Module_A1_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 5.7, Y:  5.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 819.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    //Module_A2_*
    [SwiftModule.Module_A2_05]:{
        moduleName: SwiftModule.Module_A2_05,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 3.3, Y:  8.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 1059.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_A2_04]:{
        moduleName: SwiftModule.Module_A2_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 2.1, Y: 8.1, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 885.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_A2_03]:{
        moduleName: SwiftModule.Module_A2_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 3.3, Y:  8.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 1050.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_A2_02]:{
        moduleName: SwiftModule.Module_A2_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 4.5, Y:  8.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 1077.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_A2_01]:{
        moduleName: SwiftModule.Module_A2_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 45,
            pitchAngle2: 45
        },
        dimensions: {X: 5.7, Y:  8.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 1106.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    //Module_B1_*
    [SwiftModule.Module_B1_07]:{
        moduleName: SwiftModule.Module_B1_07,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  4.9, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 599.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_B1_06]:{
        moduleName: SwiftModule.Module_B1_06,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 4.5, Y:  5.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 699.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_B1_05]:{
        moduleName: SwiftModule.Module_B1_05,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  5.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 639.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_B1_04]:{
        moduleName: SwiftModule.Module_B1_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 2.1, Y:  5.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 539.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_B1_03]:{
        moduleName: SwiftModule.Module_B1_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  5.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 618.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_B1_02]:{
        moduleName: SwiftModule.Module_B1_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 4.5, Y:  5.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 659.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_B1_01]:{
        moduleName: SwiftModule.Module_B1_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 5.7, Y:  5.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 639.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    //Module_B2_*
    [SwiftModule.Module_B2_07]:{
        moduleName: SwiftModule.Module_B2_07,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  8.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 877.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_B2_06]:{
        moduleName: SwiftModule.Module_B2_06,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 4.5, Y:  8.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 982.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_B2_05]:{
        moduleName: SwiftModule.Module_B2_05,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  8.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 925.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_B2_04]:{
        moduleName: SwiftModule.Module_B2_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 2.1, Y:  8.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 755.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_B2_03]:{
        moduleName: SwiftModule.Module_B2_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  8.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 897.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_B2_02]:{
        moduleName: SwiftModule.Module_B2_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 4.5, Y:  8.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 962.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_B2_01]:{
        moduleName: SwiftModule.Module_B2_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 60,
            pitchAngle2: 30
        },
        dimensions: {X: 5.7, Y:  8.5, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 975.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },

    //Module_C1_*
    [SwiftModule.Module_C1_05]:{
        moduleName: SwiftModule.Module_C1_05,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 975.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_C1_04]:{
        moduleName: SwiftModule.Module_C1_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 2.1, Y:  4.2, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 975.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_C1_03]:{
        moduleName: SwiftModule.Module_C1_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 975.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_C1_02]:{
        moduleName: SwiftModule.Module_C1_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 4.5, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 975.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_C1_01]:{
        moduleName: SwiftModule.Module_C1_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 5.7, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 975.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },

    // Module_C2_*
    [SwiftModule.Module_C2_05]:{
        moduleName: SwiftModule.Module_C2_05,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  7.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 871.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_C2_04]:{
        moduleName: SwiftModule.Module_C2_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Mono,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 2.1, Y:  7.2, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 696.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_C2_03]:{
        moduleName: SwiftModule.Module_C2_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 3.3, Y:  7.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 863.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_C2_02]:{
        moduleName: SwiftModule.Module_C2_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Assymetric,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 4.5, Y:  7.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 935.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_C2_01]:{
        moduleName: SwiftModule.Module_C2_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.DualCentre,
            pitchAngle1: 30,
            pitchAngle2: 30
        },
        dimensions: {X: 5.7, Y:  7.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 945.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },

    //Module_D1_*
    [SwiftModule.Module_D1_04]:{
        moduleName: SwiftModule.Module_D1_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Parapet,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 2.1, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 898.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_D1_03]:{
        moduleName: SwiftModule.Module_D1_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Parapet,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 3.3, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 1063.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_D1_02]:{
        moduleName: SwiftModule.Module_D1_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Parapet,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 4.5, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 1172.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_D1_01]:{
        moduleName: SwiftModule.Module_D1_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Parapet,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 5.7, Y:  4.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 1135.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    //Module_E1_*
    [SwiftModule.Module_E1_04]:{
        moduleName: SwiftModule.Module_E1_04,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Flat,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 2.1, Y:  3.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 596.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_E1_03]:{
        moduleName: SwiftModule.Module_E1_03,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Flat,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 3.3, Y:  3.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 717.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_E1_02]:{
        moduleName: SwiftModule.Module_E1_02,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Flat,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 5.5, Y:  3.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 782.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    [SwiftModule.Module_E1_01]:{
        moduleName: SwiftModule.Module_E1_01,
        buildingSystem: BuildingSystem.WikiHouseSwift,
        locationClass: LocationClass.EnvelopeSection,
        roofProperties: {
            roofPitchType: RoofTypes.Flat,
            pitchAngle1: 0,
            pitchAngle2: 0
        },
        dimensions: {X: 5.7, Y:  3.6, Z: 1.2, W: 0.336, unit: 'm'},
        cost: {amount: 661.00, currency: 'Euros'},
        assemblyTime: {time: 2, units: 'days'}
    },
    
}
/* In this case: -> our component is oriented such that: 
Z is the 'slice' size
Y is the height
X is the span distance 

*/


// moduleName: string; 
// buildingSystem: BuildingSystem
// locationClass: LocationClass
// roofProperties?: IRoofProperties
// cost: number; 
// assemblyTime: number; 

// export interface IRoofProperties {
//     roofPitchType: RoofTypes
//     pitchAngle1: number; 
//     pitchAngle2: number; 
// }

// length: number;
// height: number;
// width: number;
// thickness?: number //only relevant for entire building enveopes etc. which have an interior
// unit: 'mm' | 'cm' | 'm'
import * as t from 'io-ts'; 
import { Truthy, UUID, Rating } from '../../store/Shared/types/codecs'; 
/**
 * Composite types
 */
export const BuildingSystem = t.union([t.literal("WikiHouseSwift"),t.literal("WikiHouseSkylark")])
export const LocationClass = t.union([t.literal("EnvelopeSection"), t.literal("Wall")])
export const SubassemblyName = t.union([
  t.literal('Module-A1_05'),
  t.literal('Module-A1_04'),
  t.literal('Module-A1_03'),
  t.literal('Module-A1_02'),
  t.literal('Module-A1_01'),
  t.literal('Module-A1_v/a'),
  t.literal('Module-A2_05'),
  t.literal('Module-A2_04'),
  t.literal('Module-A2_03'),
  t.literal('Module-A2_02'),
  t.literal('Module-A2_01'),
  t.literal('Module-A2_v/a'),
  t.literal('Module-B1_07'),
  t.literal('Module-B1_06'),
  t.literal('Module-B1_05'),
  t.literal('Module-B1_04'),
  t.literal('Module-B1_03'),
  t.literal('Module-B1_02'),
  t.literal('Module-B1_01'),
  t.literal('Module-B1_v/a'),
  t.literal('Module-B2_07'),
  t.literal('Module-B2_06'),
  t.literal('Module-B2_05'),
  t.literal('Module-B2_04'),
  t.literal('Module-B2_03'),
  t.literal('Module-B2_02'),
  t.literal('Module-B2_01'),
  t.literal('Module-B2_v/a'),
  t.literal('Module-C1_05'),
  t.literal('Module-C1_04'),
  t.literal('Module-C1_03'),
  t.literal('Module-C1_02'),
  t.literal('Module-C1_01'),
  t.literal('Module-C1_v/a'),
  t.literal('Module-C2_05'),
  t.literal('Module-C2_04'),
  t.literal('Module-C2_03'),
  t.literal('Module-C2_02'),
  t.literal('Module-C2_01'),
  t.literal('Module-C2_v/a'),
  t.literal('Module-D1_04'),
  t.literal('Module-D1_03'),
  t.literal('Module-D1_02'),
  t.literal('Module-D1_01'),
  t.literal('Module-D1_v/a'),
  t.literal('Module-E1_04'),
  t.literal('Module-E1_03'),
  t.literal('Module-E1_02'),
  t.literal('Module-E1_01'),
  t.literal('Module-E1_v/a')
])
export const PrimaryMaterial = t.literal("Timber.Plywood")
export const RoofPitchType = t.union([t.literal('Dual-centre'), t.literal('Mono'), t.literal('Asymetric'), t.literal('Parapet'), t.literal('Flat')])
export const SpansNStories = t.union([t.literal('1'), t.literal('2'), t.literal('3')])


export const Designer = t.interface({
    id: t.string, 
    __typename: t.string,
    // designerId: t.string, 
    // designerPhoto: t.unknown, 
    designerName: t.string
  })
  
export const Subassembly = t.interface({
    id: t.string,
    // subassemblyId:  UUID,
    __typename: t.string,
    subassemblyAssemblyTimeInDays: t.number,
    subassemblyBuildingSystem: BuildingSystem,
    subassemblyLocationClass: LocationClass,
    subassemblyName: SubassemblyName,
    subassemblyPitchedAngle1: t.number,
    subassemblyPitchedAngle2: t.number,
    subassemblyPrimaryMaterial: PrimaryMaterial,
    subassemblyRoofPitchType: RoofPitchType,
    subassemblySpansNStories: SpansNStories,
    subassemblyThickness: t.number,
    subassemblyUnitCost: t.number,
    subassemblyXDimension: t.number,
    subassemblyYDimension: t.number,
    subassemblyZDimension: t.number,
  
    subassemblyDesigner: t.array(Designer)
  
  })
  
export const Subassemblies = t.array(Subassembly)
  
export const TasteProfile = t.interface({
    id: t.string,
    __typename: t.string,    
    desireColour: Truthy,
    desireColourMeta: t.string,
  })
  
export const Owner = t.interface({
    id: t.string,
    __typename: t.string,    
    ownerName: t.string,
    ownerTasteProfile: t.array(TasteProfile)
  })
  
export const Pattern = t.interface({
    id: t.string,
    __typename: t.string,    
    patternBarcode: t.string, 
    patternRating: Rating,
    patternSubAssembliesUsed: t.array(Subassemblies)
  })
  
export const EnergyPerformance = t.interface({
    id: t.string,
    __typename: t.string,    
    energyTariffElectricity: t.number,
    energyTariffGas: t.number,
    energyMeanTemperatureExternal: t.number,
    energyWallUValue: t.number,
    energyRoofUValue: t.number,
    energyFloorUValue: t.number,
    energyWindowUValue: t.number,
    energyRooflightUValue: t.number,
    energyDoorUValue: t.number,
    energyAirflowExchange: t.number,
    energyVentilationType: t.string,
    energyTempInternalAdjusted: t.number,
    energySpaceHeatingType: t.string,
    energySpaceCoolingType: t.string,
    energyWaterHeatingType: t.string
  });
  
export const Building = t.interface({
    id: t.string,
    __typename: t.string,    
    buildingFoundationType: t.string,
    buildingNumberBathrooms: t.number,
    buildingName: t.string,
    buildingEnergyPerformance: t.unknown,
    buildingPattern: t.array(Pattern),
    energyPerformance: t.array(EnergyPerformance)
  })
  
export const Property = t.interface({
    id: t.string,
    __typename: t.string,    
    propertyUprn: t.string,
    propertyName: t.string,
    propertyAddress: t.string,
    propertyNorthing: t.number,
    propertyBoundary: t.unknown,
    propertyDescription: t.string,
    propertyType: t.string,
    propertyBuilding1: t.array(Building),
    propertyBuilding2: t.union([t.array(Building), t.null]),
    propertyBuilding3: t.union([t.array(Building), t.null]),
  })
  
export const ProjectArray = t.array(t.interface({
    id: t.string,
    __typename: t.string,
    projectOwner: t.array(Owner),
    projectPropety: t.array(Property)
  }))
  
export type ProjectArray = t.TypeOf<typeof ProjectArray>
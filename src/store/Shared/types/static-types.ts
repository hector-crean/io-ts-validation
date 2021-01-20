
import * as t from 'io-ts'; 

import { 
    Building, 
    BuildingSystem, 
    LocationClass, 
    Subassemblies, 
    SubassemblyName, 
    PrimaryMaterial, 
    RoofPitchType, 
    SpansNStories,
    Subassembly, 
    Project, 
    Property,
    EnergyPerformance,
    Pattern,
    Owner,
    TasteProfile,
    Designer
} from './composite-types'; 
import { NonEmptyString, UtcDateString, IdString} from './codecs'


/**
 * Static types
 */

export type NonEmptyString = t.TypeOf<typeof NonEmptyString>;
export type UtcDateString = t.TypeOf<typeof UtcDateString>;
export type IdString = t.TypeOf<typeof IdString>;
type BuildingSystem = t.TypeOf<typeof BuildingSystem>;
type LocationClass = t.TypeOf<typeof LocationClass>;
type SubassemblyName = t.TypeOf<typeof SubassemblyName>;
type PrimaryMaterial = t.TypeOf<typeof PrimaryMaterial>;
type RoofPitchType = t.TypeOf<typeof RoofPitchType>;
type SpansNStories = t.TypeOf<typeof SpansNStories>;
type Subassembly = t.TypeOf<typeof Subassembly>
type Subassemblies = t.TypeOf<typeof Subassemblies>
type Project = t.TypeOf<typeof Project>
type Property = t.TypeOf<typeof Property>
type Building = t.TypeOf<typeof Building>
type EnergyPerformance = t.TypeOf<typeof EnergyPerformance>
type Pattern = t.TypeOf<typeof Pattern>
type Owner = t.TypeOf<typeof Owner>
type TasteProfile = t.TypeOf<typeof TasteProfile>
type Designer = t.TypeOf<typeof Designer>

export type { Subassemblies, SubassemblyName, Subassembly, Project, Property, Building, EnergyPerformance, Pattern, Owner, TasteProfile, Designer }
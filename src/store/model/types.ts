import * as t from "io-ts";
import { pipe } from 'fp-ts/pipeable';
import * as E from 'fp-ts/Either';

/**
 * Type guards
 */

const isNonEmptyString = (input: unknown): input is string => {
  return typeof input === "string" && input.length > 0;
};

const isIdString = (input: unknown): input is string => {
  return typeof input === "string" && /[A-Za-z]{12}/g.test(input);
};

const isValidDateString = (input: unknown): input is string => {
  return typeof input === "string" && !isNaN(Date.parse(input));
};

const isBetween0and10 = (input: unknown): input is number => {
  return typeof input === 'number' && input <= 10 && input >= 0; 
}

/**
 * Custom codecs
 */

const NonEmptyString = new t.Type<string, string, unknown>(
  "nonEmptyString",
  isNonEmptyString,
  (input, context) => (isNonEmptyString(input) ? t.success(input) : t.failure(input, context)),
  t.identity,
);

const UtcDateString = new t.Type<string, string, unknown>(
  "utcDateString",
  isValidDateString,
  (input, context) => (isValidDateString(input) ? t.success(input) : t.failure(input, context)),
  t.identity,
);

const IdString = new t.Type<string, string, unknown>(
  "idString",
  isIdString,
  (input, context) => (isIdString(input) ? t.success(input) : t.failure(input, context)),
  t.identity,
);

const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i
interface UUIDBrand { readonly UUID: unique symbol }
export type UUID = t.Branded<string, UUIDBrand>
const UUID = t.brand(t.string, (s): s is UUID => regex.test(s), 'UUID')

const Truthy = t.union([t.literal('true'), t.literal('fase')])

interface RatingBrand { readonly Rating: unique symbol}
type Rating = t.Branded<number, RatingBrand>
const Rating = t.brand(t.number, (n): n is Rating => isBetween0and10(n), 'Rating')
/**
 * Composite types
 */
const BuildingSystem = t.union([t.literal("WikiHouseSwift"),t.literal("WikiHouseSkylark")])
const LocationClass = t.union([t.literal("EnvelopeSection"), t.literal("Wall")])
const SubassemblyName = t.union([
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
const PrimaryMaterial = t.literal("Timber.Plywood")
const RoofPitchType = t.union([t.literal('Dual-centre'), t.literal('Mono'), t.literal('Asymetric'), t.literal('Parapet'), t.literal('Flat')])
const SpansNStories = t.union([t.literal('1'), t.literal('2'), t.literal('3')])


const Designer = t.interface({
  id: t.string, 
  // designerId: t.string, 
  // designerPhoto: t.unknown, 
  designerName: t.string
})

const Subassembly = t.interface({
  id: t.string,
  // subassemblyId:  UUID,
  __typename: t.literal("subassemblies"),
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

const Subassemblies = t.array(Subassembly)

const TasteProfile = t.interface({
  id: t.string,
  // ownerID: UUID,
  desireColour: Truthy,
  desireColourMeta: t.string,
})

const Owner = t.interface({
  id: t.string,
  // ownerId: UUID,
  ownerName: t.string,
  ownerTasteProfile: TasteProfile
})

const Pattern = t.interface({
  id: t.string,
  // patternID: UUID,
  patternBarcode: t.string, 
  patternRating: Rating,
  patternSubAssembliesUsed: Subassemblies
})

const EnergyPerformance = t.interface({
  id: t.string,
  // energyId: t.string,
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

const Building = t.interface({
  id: t.string,
  // buildingId: UUID,
  buildingFoundationType: t.string,
  buildingNumberBathrooms: t.number,
  buildingName: t.string,
  buildingEnergyPerformance: t.unknown,
  buildingPattern: Pattern,
  energyPerformance: EnergyPerformance
})

const Property = t.interface({
  id: t.string,
  // propertyId: UUID,
  propertyUprn: t.string,
  propertyName: t.string,
  propertyAddress: t.string,
  propertyNorthing: t.number,
  propertyBoundary: t.unknown,
  propertyDescription: t.string,
  propertyType: t.string,
  propertyBuilding1: Building,
  propertyBuilding2: Building,
  propertyBuilding3: Building
})

const Project = t.interface({
  id: t.string,
  // projectID: UUID,
  projectOwner: Owner,
  projectPropety: Property
})









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
export { Subassemblies, SubassemblyName, Subassembly, Project, Property, Building, EnergyPerformance, Pattern, Owner, TasteProfile, Designer }
/**
 * Entities
 */


// https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
export type NormalizedSubassemblies = Record<string, Subassembly>;
export type NormalizedProjects = Record<string, Project>


/**
 * State
 */
/**
 The recommended approach to managing relational or nested data in a Redux store is to treat a 
 portion of your store as if it were a database, and keep that data in a normalized form. 
 */

export interface NormalizedObject<T> {
  byId: Record<string, T>;
  allIds: string[];
}

export type ModelState = {
  entities: {
    subassemblies: NormalizedSubassemblies;
  };
};


export type ReduxProjectState = {
  entities: {
    projects: NormalizedObject<Project>,
    owners: NormalizedObject<Owner>,
    properties: NormalizedObject<Property>,
    buildings: NormalizedObject<Building>,
    subassemblies: NormalizedObject<Subassembly>,
    energyPerformance: NormalizedObject<EnergyPerformance>,
    pattern: NormalizedObject<Pattern>,
    tasteProfile: NormalizedObject<TasteProfile>,
    designer: NormalizedObject<Designer>
  }
}


/* Decoding functions */

// type validatorFn = <T, A>(decoder: t.Decoder<T, A>) => (queryResult: QueryResult ) => any; 

// export const validator: validatorFn 
// = (decoder) => (queryResult) => {
//   return pipe(
//     queryResult.data,
//     decoder.decode,
//     // E.map((value) => ({value})),
//     E.fold(
//         // failure handler
//         (errors) => {console.log(`Error: object is ${errors}`)},
//         // success handler
//         (value) => {return value},
//     ),
//   );
// };


//https://dev.to/gillchristian/enough-fp-ts-to-work-with-io-ts-20ip
export const decodeWith 
= <A>(decoder: t.Decoder<unknown, A>) => ( response: unknown ) =>
  pipe(
    response,
    decoder.decode,
    // humanizeErrors,
    E.mapLeft((errors) => ({tag: 'decoding', errors} as const)),
  )



/**
 * Actions 
 */


// ->> CRUD operations on a normalized state structure
 
export enum ModelStateActions {
    UPSERT_SUBASSEMBLIES = 'UPSERT_SUBASSEMBLIES',
    UPSERT_OWNERS = "UPSERT_OWNERS",
    UPSERT_PROPERTIES = "UPSERT_PROPERTIES",
    UPSERT_BUILDINGS = "UPSERT_BUILDINGS",
    UPSERT_ENERGY_PERFORMANCE = 'UPSERT_ENERGY_PERFORMANCE',
    UPSERT_PATTERN = "UPSERT_PATTERN",
    UPSERT_TASTE_PROFILE = "UPSERT_TASTE_PROFILE",
    UPSERT_DESIGNER = "UPSERT_DESIGNER",
    UPSERT_PROJECTS = "UPSERT_PROJECTS"
}

interface UpsertSubassembliesAction {
  type: typeof ModelStateActions.UPSERT_SUBASSEMBLIES
  payload: {subassembly: Subassembly}
}

interface UpsertOwnersAction {
  type: typeof ModelStateActions.UPSERT_OWNERS
  payload: {subassembly: Owner}
}




export type ModelStateActionTypes = 
| UpsertSubassembliesAction


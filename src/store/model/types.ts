import * as t from "io-ts";

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
type UUID = t.Branded<string, UUIDBrand>
const UUID = t.brand(t.string, (s): s is UUID => regex.test(s), 'UUID')

/**
 * Composite types
 */
const BuildingSystem = t.union([t.literal("WikiHouseSwift"),t.literal("WikiHouseSkylark")])
const LocationClass = t.union([t.literal("EnvelopeSection"), t.literal("Wall")])
const ModuleName = t.union([
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



const AlmereModule = t.interface({
    id: UUID.type,
    __typename: t.literal("structureDataAlmere"),
    assemblyTimeInDays: t.number,
    buildingSystem: BuildingSystem,
    locationClass: LocationClass,
    moduleName: ModuleName,
    pitchedAngle1: t.number,
    pitchedAngle2: t.number,
    primaryMaterial: PrimaryMaterial,
    roofPitchType: RoofPitchType,
    spansNStories: SpansNStories,
    thickness: t.number,
    unitCost: t.number,
    xDimension: t.number,
    yDimension: t.number,
    zDimension: t.number 
  })
const AlmereModules = t.array(AlmereModule)


/**
 * Static types
 */
export type NonEmptyString = t.TypeOf<typeof NonEmptyString>;
export type UtcDateString = t.TypeOf<typeof UtcDateString>;
export type IdString = t.TypeOf<typeof IdString>;

type BuildingSystem = t.TypeOf<typeof BuildingSystem>;
type LocationClass = t.TypeOf<typeof LocationClass>;
type ModuleName = t.TypeOf<typeof ModuleName>;
export type { ModuleName }
type PrimaryMaterial = t.TypeOf<typeof PrimaryMaterial>;
type RoofPitchType = t.TypeOf<typeof RoofPitchType>;
type SpansNStories = t.TypeOf<typeof SpansNStories>;


type AlmereModule = t.TypeOf<typeof AlmereModule>
export { AlmereModule }
type AlmereModules = t.TypeOf<typeof AlmereModules>
export { AlmereModules }




/**
 * Entities
 */


// https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape
export type NormalizedModulesAlmere = Record<string, AlmereModule>;



/**
 * State
 */
/**
 The recommended approach to managing relational or nested data in a Redux store is to treat a 
 portion of your store as if it were a database, and keep that data in a normalized form. 
 */

export type ModelState = {
  entities: {
    almereModules: NormalizedModulesAlmere;
  };
};



/**
 * Actions
 */

 

export enum ModelStateActions {
    UPSERT_ALMERE_MODULE = 'UPSERT_ALMERE_MODULE'
}


interface GetModuleAction {
  type: typeof ModelStateActions.UPSERT_ALMERE_MODULE
  payload: {almereModule: AlmereModule}
}


export type ModelStateActionTypes = GetModuleAction; 


import { Property, Owner, Project, Building, Subassembly, EnergyPerformance, Pattern, TasteProfile, Designer} from './static-types'
import * as t from 'io-ts'; 
import { pipe } from 'fp-ts/pipeable'; 
import * as E from 'fp-ts/Either'; 
/**
 * Entities
 */

export interface NormalizedObject<T> {
    byId: Record<string, T>;
    allIds: string[];
  }
  
/**
 * State
 */
/**
 The recommended approach to managing relational or nested data in a Redux store is to treat a 
 portion of your store as if it were a database, and keep that data in a normalized form. 
 */


export type DashboardState = {
  entities: {
    projects: NormalizedObject<Project>,
    owners: NormalizedObject<Owner>,
    properties: NormalizedObject<Property>,
    buildings: NormalizedObject<Building>,
    subassemblies: NormalizedObject<Subassembly>,
    energyPerformances: NormalizedObject<EnergyPerformance>,
    patterns: NormalizedObject<Pattern>,
    tasteProfiles: NormalizedObject<TasteProfile>,
    designers: NormalizedObject<Designer>
  }
}


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
  payload: {owners: Owner}
}
interface UpsertPropertiesAction {
  type: typeof ModelStateActions.UPSERT_PROPERTIES
  payload: {properties: Property}
}
interface UpsertEnergyPerformancesAction {
  type: typeof ModelStateActions.UPSERT_ENERGY_PERFORMANCE
  payload: {energyPerformances: EnergyPerformance}
}
interface UpsertBuildingsAction {
  type: typeof ModelStateActions.UPSERT_BUILDINGS
  payload: {buildings: Building}
}
interface UpsertPatternsAction {
  type: typeof ModelStateActions.UPSERT_PATTERN
  payload: {patterns: Pattern}
}
interface UpsertTasteProfilesAction {
  type: typeof ModelStateActions.UPSERT_TASTE_PROFILE
  payload: {tasteProfiles: TasteProfile}
}
interface UpsertDesignersAction {
  type: typeof ModelStateActions.UPSERT_DESIGNER
  payload: {designers: Designer}
}
interface UpsertProjectsAction {
  type: typeof ModelStateActions.UPSERT_PROJECTS
  payload: {projects: Project}
}


export type ModelStateActionTypes = 
| UpsertSubassembliesAction
| UpsertOwnersAction
| UpsertPropertiesAction
| UpsertEnergyPerformancesAction
| UpsertBuildingsAction
| UpsertPatternsAction
| UpsertTasteProfilesAction
| UpsertDesignersAction
| UpsertProjectsAction





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
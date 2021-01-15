
import { SubassemblyName } from './types'; 
import { 
  Subassembly, Owner, Property, EnergyPerformance, Building, Pattern, TasteProfile, Designer, Project,
  ModelStateActions, 
  ModelStateActionTypes } from './types'

///
// Action constructors
///
export function upsertSubassembly(subassembly: Subassembly): ModelStateActionTypes {
  return {
    type: ModelStateActions.UPSERT_SUBASSEMBLIES,
    payload: { subassembly }
  }
}

export function upsertOwner(owners: Owner): ModelStateActionTypes {
  return {
    type: ModelStateActions.UPSERT_OWNERS,
    payload: { owners }
  }
}

export function upsertProperty(properties: Property): ModelStateActionTypes {
  return {
    type: ModelStateActions.UPSERT_PROPERTIES,
    payload: { properties }
  }
}

export function upsertEnergyPerformance(energyPerformances: EnergyPerformance): ModelStateActionTypes {
  return {
    type: ModelStateActions.UPSERT_ENERGY_PERFORMANCE,
    payload: { energyPerformances }
  }
}

export function upsertBuilding(buildings: Building): ModelStateActionTypes {
  return {
    type: ModelStateActions.UPSERT_BUILDINGS,
    payload: { buildings }
  }
}

export function upsertPattern(patterns: Pattern): ModelStateActionTypes {
  return {
    type: ModelStateActions.UPSERT_PATTERN,
    payload: { patterns }
  }
}

export function upsertTasteProfile(tasteProfiles: TasteProfile): ModelStateActionTypes {
  return {
    type: ModelStateActions.UPSERT_TASTE_PROFILE,
    payload: { tasteProfiles }
  }
}


export function upsertDesigner(designers: Designer): ModelStateActionTypes {
  return {
    type: ModelStateActions.UPSERT_DESIGNER,
    payload: { designers }
  }
}

export function upsertProject(projects: Project): ModelStateActionTypes {
  return {
    type: ModelStateActions.UPSERT_PROJECTS,
    payload: { projects }
  }
}

/**
 * export type ModelStateActionTypes = 
| UpsertSubassembliesAction
| UpsertOwnersAction
| UpsertPropertiesAction
| UpsertEnergyPerformancesAction
| UpsertBuildingsAction
| UpsertPatternsAction
| UpsertTasteProfilesAction
| UpsertDesignersAction
| UpsertProjectsAction
 */





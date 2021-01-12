
import { ModuleName } from '../../types'
import { AlmereModule, ModelStateActions, ModelStateActionTypes } from './types'

///
// Action constructors
///
export function upsertAlmereModule(almereModule: AlmereModule): ModelStateActionTypes {
  return {
    type: ModelStateActions.UPSERT_ALMERE_MODULE,
    payload: {almereModule }

  }
}




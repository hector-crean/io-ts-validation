
import { SubassemblyName } from '../../types'
import { Subassembly, ModelStateActions, ModelStateActionTypes } from './types'

///
// Action constructors
///
export function upsertSubassembly(subassembly: Subassembly): ModelStateActionTypes {
  return {
    type: ModelStateActions.UPSERT_SUBASSEMBLIES,
    payload: { subassembly }
  }
}








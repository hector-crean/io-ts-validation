import {ModelStateActions, ModelStateActionTypes} from './types/model-state-action-types'
import { Container } from './types/static-types'; 
///
// Action constructors
///
export function bringContainerIntoFocus(containerInFocus: Container): ModelStateActionTypes {
    return {
      type: ModelStateActions.BRING_CONTAINER_INTO_FOCUS,
      payload: { containerInFocus }
    }
}

export function bringAllContainersIntoFocus(): ModelStateActionTypes {
  return {
    type: ModelStateActions.BRING_ALL_CONTAINERS_INTO_FOCUS,
  }
}
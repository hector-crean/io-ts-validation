import {ModelStateActions, ModelStateActionTypes} from './types/editor-action-types'

import { Container } from './types/Container'; 
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
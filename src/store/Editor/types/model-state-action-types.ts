import { Container } from './static-types'; 
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


export type EditorState = {
  entities: {
    containers: NormalizedObject<Container>
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
   BRING_CONTAINER_INTO_FOCUS = "BRING_CONTAINER_INTO_FOCUS",
   BRING_ALL_CONTAINERS_INTO_FOCUS = "BRING_ALL_CONTAINERS_INTO_FOCUS"
}

interface BringContainerIntoFocusAction {
  type: typeof ModelStateActions.BRING_CONTAINER_INTO_FOCUS
  payload: { containerInFocus: Container }
}

interface BringAllContainerIntoFocusAction {
  type: typeof ModelStateActions.BRING_ALL_CONTAINERS_INTO_FOCUS
}




export type ModelStateActionTypes = 
| BringContainerIntoFocusAction
| BringAllContainerIntoFocusAction




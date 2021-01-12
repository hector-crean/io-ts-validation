import type { Middleware } from 'redux'
import type { RootState } from '../store'

export const loggerMiddleware: Middleware<
  {}, // legacy type parameter added to satisfy interface signature
  RootState
> = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}




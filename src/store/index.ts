
import { modelReducer } from './model/reducers'

import { combineReducers }  from 'redux'; 
import thunkMiddleware from 'redux-thunk'
import { loggerMiddleware } from '../middleware/logger'
import { configureStore } from '@reduxjs/toolkit'


export const rootReducer = combineReducers({
  model: modelReducer
})


export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .prepend(
        // correctly typed middlewares can just be used
        loggerMiddleware,
        thunkMiddleware
      )
      // prepend and concat calls can be chained with .concat()
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>




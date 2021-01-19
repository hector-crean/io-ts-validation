
import { dashboardReducer } from './Dashboard/reducers'
import { editorReducer } from './Editor/reducers'

import { combineReducers }  from 'redux'; 
import thunkMiddleware from 'redux-thunk'
import { loggerMiddleware } from '../middleware/logger'
import { configureStore } from '@reduxjs/toolkit'


export const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  editor: editorReducer
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



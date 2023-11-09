

import {combineReducers} from 'redux'

import { userSlice } from './reducers/Index';

export const rootReducer = combineReducers({
  user: userSlice.reducer
})


export type RootState = ReturnType<typeof rootReducer>


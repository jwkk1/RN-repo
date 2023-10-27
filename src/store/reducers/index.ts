// reducers/index.js

import { combineReducers } from '@reduxjs/toolkit';
import temp from './temp';

const rootReducer = combineReducers({
  temp,
});

export type rootReducer = ReturnType<typeof rootReducer>;
export default rootReducer;

import {
  combineReducers
} from 'redux';
import { AppRootState } from '../types/appRootState';

import { teamsReducer } from './auth';

const rootReducer = combineReducers<AppRootState>({
  teamsReducer,
});

export default rootReducer;

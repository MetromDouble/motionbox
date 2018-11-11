import {
  Store,
} from 'redux';
import { History } from 'history';
import configureStoreProd from './configureStore.prod';
import configureStoreDev from './configureStore.dev';
import { AppRootState } from './types/appRootState'

/* eslint-disable import/no-mutable-exports */
let exportedStore: (
  history: History,
  initialState: AppRootState,
) => Store<AppRootState>;

if (process.env.NODE_ENV === 'production') {
  exportedStore = configureStoreProd;
} else {
  exportedStore = configureStoreDev;
}

export default exportedStore;

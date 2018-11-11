import {
  Store,
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';

import { AppRootState } from './types/appRootState'
import rootReducer from './reducers';
// import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = compose;

export default function configureStore(
  history: History,
  initialState: AppRootState = {},
): Store<AppRootState> {
  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
  );

  // sagaMiddleware.run(rootSaga);

  return store;
};

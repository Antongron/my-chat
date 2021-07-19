import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from './rootReducer';
import rootSaga from '../sagas';

const saga = createSagaMiddleware();

const store = createStore(rootReducer, compose(composeWithDevTools(applyMiddleware(saga))));

const persistor = persistStore(store);

export { persistor, store };

saga.run(rootSaga);

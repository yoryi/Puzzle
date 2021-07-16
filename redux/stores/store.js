//MODULOS REDUX
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';

//REDUCER GLOBAL
import rootReducer  from '../index';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Task']
}

//PERSISTENCIA + STORE
const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);


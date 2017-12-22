import C from './constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore,compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage';

const middlewares = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
);

export default () => {
	const persistConfig = {
		key: 'root',
    storage,
    blacklist: ['nav'],
  };
  const reducer = persistReducer(persistConfig, appReducer);
  const store = createStore(reducer, enhancer);
  const persistor = persistStore(store);

  return { store, persistor };
};

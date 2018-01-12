import C from './constants'
import appReducer from './reducers'
import {formPodcastInfoForStore} from './actions'
import Realm from "./Realm"
import thunk from 'redux-thunk'
import { createStore,compose, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'remote-redux-devtools';
import { persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/es/storage';

const middlewares = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeWithDevTools(
  applyMiddleware(...middlewares),
);

export default () => {
	const persistConfig = {
		key: 'root',
    storage,
    blacklist: ['nav','subscribedPodcasts'],
  };

  //Form the inital subscribed podcasts object from the RealmDB store
  let subscribedPodcasts = Realm.getSubscribedPodcasts()
  var initialPodcasts = {}
  for (var i = 0;i < subscribedPodcasts.length;i++) {
    initialPodcasts[subscribedPodcasts[i].rssLink] = formPodcastInfoForStore(subscribedPodcasts[i])
  }
  const reducer = persistReducer(persistConfig, appReducer);
  const store = createStore(reducer, {'subscribedPodcasts':initialPodcasts},enhancer);
  const persistor = persistStore(store);
  //persistor.purge()
  return { store, persistor };
};

import { createStore, applyMiddleware } from 'redux';

import ReduxThunk from 'redux-thunk';


import { persistReducer,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import rootReducer from './rootReducer';





const persistConfig = {
   
    key: 'root-key',
    storage,
    stateReconciler: hardSet,
    blacklist: [] // navigation will not be persisted
};
const persistConfig2 = {
  timeout: 1000, //Set the timeout function to 2 seconds
  key: 'root-key',
  storage,

  blacklist: [] // navigation will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const persistedReducer2 = persistReducer(persistConfig2, rootReducer);
const store = createStore(
  persistedReducer,

  applyMiddleware( ReduxThunk)
);
const store2 = createStore(
  persistedReducer2,

  applyMiddleware( ReduxThunk)
);




//const persistor=null
export { store,store2 ,persistedReducer  };

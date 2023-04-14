import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import  { createWrapper } from 'next-redux-wrapper';
import  configureStore  from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
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
const makeStore = () =>
  createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
  );

const wrapper = createWrapper(makeStore, { debug: true });

//const persistor=null
export { wrapper ,store,store2 };

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import menuSlice from "./formSlice";
import credentialReducer from "./credentialSlice";
import userReducer from "./userSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  user: userReducer,
  credentials : credentialReducer
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import { persistReducer, persistStore, createTransform } from "redux-persist";
import storage from "redux-persist/lib/storage";


const resetErrorTransform = createTransform(
  (inboundState) => {
    return inboundState;
  },
  (outboundState) => {
    return {
      ...outboundState,
      error: null 
    };
  },
  { whitelist: ["user"] }
);

const rootReducer = combineReducers({
  user: userReducer
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [resetErrorTransform]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);


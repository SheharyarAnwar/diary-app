import {
  configureStore,
  createStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reduceEachTrailingCommentRange } from "typescript";
import { DiaryState } from "./Slices/Diary/types";
import { UserState } from "./Slices/User/types";
import userReducer from "./Slices/User/userReducer";
import diaryReducer from "./Slices/Diary/diaryReducer";

export interface RootState {
  userReducer: UserState;
  diaryReducer: DiaryState;
}
const reducer = combineReducers({
  // here we will be adding reducers
  userReducer,
  diaryReducer,
});
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

let persistor = persistStore(store);

export { store, persistor };

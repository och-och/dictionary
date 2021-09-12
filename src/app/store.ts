import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import termsSlice from "../features/terms/terms-slice"
import {  persistStore,  persistReducer,  FLUSH,  REHYDRATE,  PAUSE,  PERSIST,  PURGE,  REGISTER,} from "redux-persist"

const persistConfig = {
	key: "root",
	storage
}

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		terms: termsSlice
	})
)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
})
export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
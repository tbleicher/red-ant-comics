import { configureStore } from "@reduxjs/toolkit";
import { comicsApi } from "../services/comicsApi";
import { favouritesReducer } from "./favourites";
import { uiStateReducer } from "./uiState";

export const store = configureStore({
  reducer: {
    uiState: uiStateReducer,
    favourites: favouritesReducer,
    [comicsApi.reducerPath]: comicsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(comicsApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg
// for customization
// setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import menuReducer from "./slices/menu/menuSlice";

export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

setupListeners(store.dispatch);

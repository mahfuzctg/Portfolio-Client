import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { blogsApi } from "./features/blogs/blogsApi";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(blogsApi.middleware),
});

// Infer types for better TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

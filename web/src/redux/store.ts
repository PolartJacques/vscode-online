import { configureStore } from "@reduxjs/toolkit"
import dockerReducer from "./docker/reducer"

const store = configureStore({
  reducer: {
    docker: dockerReducer
  },
})

export type RootState = ReturnType<typeof store.getState>

export default store
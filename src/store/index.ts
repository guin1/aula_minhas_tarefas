import { configureStore } from '@reduxjs/toolkit'

import tarefasRedurcers from './redurces/tarefas'
import filtroReducer from './redurces/filtro'

const store = configureStore({
  reducer: {
    tarefas: tarefasRedurcers,
    filtro: filtroReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store

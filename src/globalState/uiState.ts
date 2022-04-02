import { createSlice } from '@reduxjs/toolkit'

export interface UIState {
  favouritesPanelOpen: boolean
}

const initialState: UIState = {
  favouritesPanelOpen: false
}

export const uiStateSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    closeFavourites: (state) => {
      state.favouritesPanelOpen = false;
    },
    openFavourites: (state) => {
      state.favouritesPanelOpen = true;
    },
  },
})

// Action creators are generated for each case reducer function
export const { closeFavourites, openFavourites } = uiStateSlice.actions

export const uiStateReducer = uiStateSlice.reducer
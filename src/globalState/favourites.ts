import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ComicsListItem } from "../services/types";

export interface FavouritesState {
  favourites: ComicsListItem[];
}

const initialState: FavouritesState = {
  favourites: [],
};

export const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites: (state, action: PayloadAction<ComicsListItem>) => {
      const favourites = [...state.favourites, action.payload];
      state.favourites = favourites;
    },

    removeFromFavourites: (state, action: PayloadAction<number>) => {
      const favourites = state.favourites.filter((comic) => comic.id !== action.payload);
      state.favourites = favourites;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;

export const favouritesReducer = favouritesSlice.reducer;

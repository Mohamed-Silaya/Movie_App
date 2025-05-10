import { createSlice } from '@reduxjs/toolkit';

const loadFavoritesFromLocalStorage = () => {
  const savedFavorites = localStorage.getItem('favorites');
  return savedFavorites ? JSON.parse(savedFavorites) : [];
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: loadFavoritesFromLocalStorage(),
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const { id, type } = action.payload;
      const exists = state.items.some(item => item.id === id && item.type === type);
      
      if (exists) {
        state.items = state.items.filter(item => !(item.id === id && item.type === type));
      } else {
        state.items.push(action.payload);
      }
      
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export const selectFavorites = state => state.favorites.items;
export default favoritesSlice.reducer;
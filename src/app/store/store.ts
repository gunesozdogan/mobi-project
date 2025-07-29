import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import productsReducer from './slices/productsSlice';
import loginReducer from './slices/loginSlice';
import cartReducer from './slices/cartSlice';

const loadState = () => {
  try {
    const cartData = localStorage.getItem('cart');
    const themeData = localStorage.getItem('theme');

    return {
      cart: cartData ? JSON.parse(cartData) : undefined,
      theme: themeData ? JSON.parse(themeData) : undefined,
    };
  } catch (error) {
    console.error('Could not load from localStorage', error);
    return undefined;
  }
};

const saveState = (state: RootState) => {
  try {
    localStorage.setItem('cart', JSON.stringify(state.cart));
    localStorage.setItem('theme', JSON.stringify(state.theme));
  } catch (error) {
    console.error('Could not save to localStorage', error);
  }
};

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    products: productsReducer,
    login: loginReducer,
    cart: cartReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

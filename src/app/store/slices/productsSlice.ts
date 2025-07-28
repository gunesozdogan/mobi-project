import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '@/app/types/product';

interface ProductState {
  selectedCategory: string;
  selectedProducts: Product[];
}

const initialState: ProductState = {
  selectedCategory: 'beauty',
  selectedProducts: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.selectedProducts = action.payload;
    },
  },
});

export const { selectCategory, setProducts } = productsSlice.actions;
export default productsSlice.reducer;

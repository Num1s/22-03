import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import {act} from "react-dom/test-utils";


export const fetchProducts = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        return axios
            .get('https://fakerapi.it/api/v1/products?_quantity=10')
            .then(resp => resp.data.data)
    }
)

const basketSlice = createSlice({
    name: 'item',
    initialState: {
        items: [],
        basket: [],
        loading: false,
        error: '',
    },
    reducers: {
        addToBasket: (state, action) => {
            state.basket.push(action.payload)
        },
        removeToBasket: (state, action) => {
            const filteredBasket = state.basket.filter(i => i.id !== action.payload.id)
            state.basket = filteredBasket
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, state => {
            state.loading = true;
            state.error = '';
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.items = [];
            state.error = action.error.message;
        })
    }
})

export const { addToBasket, removeToBasket } = basketSlice.actions
export default basketSlice.reducer
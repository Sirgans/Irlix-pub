import { createSlice } from "@reduxjs/toolkit";
import { api } from "./pub.api";


const initialState = {
    card: [],
    selectCatigory: 'Всё',
    searchValue: '',
    isLoading: false,
    detailCard: '',
}


export const pubSlice = createSlice({
    name: 'pub',
    initialState,
    reducers: {
        setcard(state, action) {
            state.card = action.payload
        },
        setSelectCatigory(state, action) {
            state.selectCatigory = action.payload
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload
        },
        fetchDetailCard(state, action) {
            state.detailCard = state.card.find(item => action.payload === item.id)
        }
    },
    extraReducers: {
        [api.getAllCards.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
        },
        [api.getAllCards.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.card = action.payload;

        },
        [api.getAllCards.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        },
        [api.getOneCard.pending]: (state) => {
            state.isLoading = true;
            state.error = "";
        },
        [api.getOneCard.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.detailCard = action.payload;

        },
        [api.getOneCard.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    }
})

export const { setcard, setIsLoading, setSearchValue, setSelectCatigory, fetchDetailCard } = pubSlice.actions;
export const pubReducer = pubSlice.reducer;
export const selectorCard = state => state.pub


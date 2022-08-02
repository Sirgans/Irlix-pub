import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const api ={
    getAllCards: createAsyncThunk (
        'pub/getAll',
        async function () {
            const {data} = await axios.get('https://62debc5a9c47ff309e7ae90e.mockapi.io/Cards')
            return data
        }
    ),
    getOneCard: async (id) => {
        const {data} = await axios.get(`https://62debc5a9c47ff309e7ae90e.mockapi.io/Cards/${id}`)
        return data
    }
}
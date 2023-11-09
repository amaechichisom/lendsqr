import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {UserData} from "../types/Index"



const API_URL = process.env.REACT_APP_API_URL;



export const getUser = createAsyncThunk<
    UserData,
    string
>('report/user',
    async () => {
        let result;
        result = await axios.get(`${API_URL}user`);
        return result.data;
    });
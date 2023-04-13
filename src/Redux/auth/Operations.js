import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';
// export const token = {
//     set(token) {
//         axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//     },
//     unset() {
//         axios.defaults.headers.common.Authorization = '';
//     }
// };
const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
}

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await axios.post('/users/signup', { ...credentials });
            setAuthHeader(res.data.token);
            // token.set(data.token);
            // console.log(data)
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const res = await axios.post('/users/login', credentials);
            // token.set(data.token);
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    },
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
            // token.unset();
            clearAuthHeader();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

export const fetchCurrentUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }

        // token.set(persistedToken);
        try {
            setAuthHeader(persistedToken);
            const res = await axios.get('/users/current');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);


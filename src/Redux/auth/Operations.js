import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

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
            const res = await axios.post('/users/signup', credentials);
            setAuthHeader(res.data.token);
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
            setAuthHeader(res.data.token);
            return res.data;
        } catch (error) {
            toast.error('Please, check your name or password')
            return rejectWithValue(error.message)
        }
    },
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout');
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

        try {
            setAuthHeader(persistedToken);
            const res = await axios.get('/users/current');
            return res.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    },
);


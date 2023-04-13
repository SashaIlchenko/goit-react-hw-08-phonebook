import { configureStore, } from "@reduxjs/toolkit";
import { ValueReducer } from "./contacts/ValueSlice";
import { FilterReduser } from "./contacts/FilterSlice";
import { authReducer } from "./auth/Slice";
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: ValueReducer,
        filter: FilterReduser,
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);



// export const store = configureStore({
//     reducer: {
//         contacts: ValueReducer,
//         filter: FilterReduser,
//         users: authReducer,
//     },
// });



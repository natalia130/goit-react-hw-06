import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

const rootReducer = combineReducers({
    contacts: contactsReducer,
    filters: filtersReducer,
})

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['contacts'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: rootReducer,
// });

const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
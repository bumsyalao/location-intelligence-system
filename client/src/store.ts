import { combineReducers, Reducer, AnyAction } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


import vehicleReducer, { VehicleState } from './redux/vehicleReducer';


export interface RootState {
    vehicles: VehicleState;
}

// Combine the individual reducers
const rootReducer: Reducer<RootState, AnyAction> = combineReducers({
    vehicles: vehicleReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['vehicles'], // List of reducers to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
});

const persistor = persistStore(store);


export { store, persistor };

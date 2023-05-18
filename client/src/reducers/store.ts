import { combineReducers, Reducer, AnyAction } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import vehicleReducer, { VehicleState } from './vehicleReducer';


interface RootState {
    vehicles: VehicleState;
}

// Combine the individual reducers
const rootReducer: Reducer<RootState, AnyAction> = combineReducers({
    vehicles: vehicleReducer,
});

const store = configureStore({
    reducer: rootReducer,
});

export default store;

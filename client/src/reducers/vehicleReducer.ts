import { Reducer } from 'redux';
import Vehicle from '../types';

// Define the vehicle state type
export interface VehicleState {
    vehicles: Vehicle[];
    selectedVehicle: Vehicle;
    loading: boolean;
    error: string | null;
}

// Define the action types
enum ActionTypes {
    FETCH_VEHICLES_SUCCESS = 'FETCH_VEHICLES_SUCCESS',
    FETCH_VEHICLES_FAILURE = 'FETCH_VEHICLES_FAILURE',
    CREATE_VEHICLE_REQUEST = 'CREATE_VEHICLE_REQUEST',
    CREATE_VEHICLE_SUCCESS = 'CREATE_VEHICLE_SUCCESS',
    CREATE_VEHICLE_FAILURE = 'CREATE_VEHICLE_FAILURE',
    FETCH_A_VEHICLE_SUCCESS = 'FETCH_A_VEHICLE_SUCCESS',
    FETCH_A_VEHICLE_FAILURE = 'FETCH_A_VEHICLE_FAILURE',
    UPDATE_VEHICLE_REQUEST = 'UPDATE_VEHICLE_REQUEST',
    UPDATE_VEHICLE_SUCCESS = 'UPDATE_VEHICLE_SUCCESS',
    UPDATE_VEHICLE_FAILURE = 'UPDATE_VEHICLE_FAILURE',
    DELETE_A_VEHICLE_SUCCESS = 'DELETE_A_VEHICLE_SUCCESS',
    DELETE_A_VEHICLE_FAILURE = 'DELETE_A_VEHICLE_FAILURE',
}

// Define the action interfaces
interface FetchVehiclesSuccessAction {
    type: ActionTypes.FETCH_VEHICLES_SUCCESS;
    payload: Vehicle[];
}

interface FetchVehiclesFailureAction {
    type: ActionTypes.FETCH_VEHICLES_FAILURE;
    error: string;
}

interface CreateVehicleRequestAction {
    type: ActionTypes.CREATE_VEHICLE_REQUEST;
}

interface CreateVehicleSuccessAction {
    type: ActionTypes.CREATE_VEHICLE_SUCCESS;
    payload: Vehicle;
}

interface CreateVehicleFailureAction {
    type: ActionTypes.CREATE_VEHICLE_FAILURE;
    error: string;
}
interface FetchAVehicleSuccessAction {
    type: ActionTypes.FETCH_A_VEHICLE_SUCCESS;
    payload: Vehicle;
}

interface FetchAVehicleFailureAction {
    type: ActionTypes.FETCH_A_VEHICLE_FAILURE;
    error: string;
}

interface UpdateVehicleRequestAction {
    type: ActionTypes.UPDATE_VEHICLE_REQUEST;
}

interface UpdateVehicleSuccessAction {
    type: ActionTypes.UPDATE_VEHICLE_SUCCESS;
    payload: Vehicle;
}

interface UpdateVehicleFailureAction {
    type: ActionTypes.UPDATE_VEHICLE_FAILURE;
    error: string;
}
interface DeleteAVehicleSuccessAction {
    type: ActionTypes.DELETE_A_VEHICLE_SUCCESS;
    payload: Vehicle;
}

interface DeleteAVehicleFailureAction {
    type: ActionTypes.DELETE_A_VEHICLE_FAILURE;
    error: string;
}
// Define the union type for all actions
type VehicleActions =
    | FetchVehiclesSuccessAction
    | FetchVehiclesFailureAction
    | CreateVehicleRequestAction
    | CreateVehicleSuccessAction
    | CreateVehicleFailureAction
    | FetchAVehicleSuccessAction
    | FetchAVehicleFailureAction
    | UpdateVehicleRequestAction
    | UpdateVehicleSuccessAction
    | UpdateVehicleFailureAction
    | DeleteAVehicleSuccessAction
    | DeleteAVehicleFailureAction;

// Define the initial state
const initialState: VehicleState = {
    vehicles: [],
    selectedVehicle: { name: '', location: { lat: 0, lng: 0 }, status: 'inactive' },
    loading: false,
    error: null,
};

// Create the reducer
const vehicleReducer: Reducer<VehicleState, VehicleActions> = (
    state = initialState,
    action: VehicleActions
) => {
    switch (action.type) {
        case ActionTypes.FETCH_VEHICLES_SUCCESS:
            return { ...state, loading: false, vehicles: action.payload, error: null };
        case ActionTypes.FETCH_VEHICLES_FAILURE:
            return { ...state, loading: false, error: action.error };
        case ActionTypes.CREATE_VEHICLE_REQUEST:
            return { ...state, loading: true, error: null };
        case ActionTypes.CREATE_VEHICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                vehicles: [...state.vehicles, action.payload],
                error: null,
            };
        case ActionTypes.CREATE_VEHICLE_FAILURE:
            return { ...state, loading: false, error: action.error };
        case ActionTypes.FETCH_A_VEHICLE_SUCCESS:
            return { ...state, loading: false, selectedVehicle: action.payload, error: null };
        case ActionTypes.FETCH_A_VEHICLE_FAILURE:
            return { ...state, loading: false, error: action.error };
        case ActionTypes.UPDATE_VEHICLE_REQUEST:
            return { ...state, loading: true, error: null };
        case ActionTypes.UPDATE_VEHICLE_SUCCESS:
            return {
                ...state,
                loading: false,
                vehicles: [...state.vehicles, action.payload],
                error: null,
            };
        case ActionTypes.UPDATE_VEHICLE_FAILURE:
            return { ...state, loading: false, error: action.error };
        case ActionTypes.DELETE_A_VEHICLE_SUCCESS:
            return { ...state, loading: false, selectedVehicle: action.payload, error: null };
        case ActionTypes.DELETE_A_VEHICLE_FAILURE:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};

export default vehicleReducer;
export { ActionTypes };

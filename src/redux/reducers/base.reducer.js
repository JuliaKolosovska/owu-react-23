import {SAVE_CAR, SET_CARS, START_LOADING} from "../actions";

let initState = {
    isLoading: false,
    cars: []
};

export const carReducer = (state = initState, action) => {

    switch (action.type) {
        case START_LOADING:
            return {...state, isLoading: true};
        case SET_CARS:
            return {...state, isLoading: false, cars: [...action.payload]};
        case SAVE_CAR:
            return {...state, cars: state.cars};
        default:
            return state;

    }
};
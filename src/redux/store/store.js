import {applyMiddleware, createStore} from "redux";

import thunk from "redux-thunk";
import {carReducer} from "../reducers";

export let store=createStore(carReducer,applyMiddleware(thunk))
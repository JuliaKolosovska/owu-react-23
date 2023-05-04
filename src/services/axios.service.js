import axios from "axios";

import {carsAPI, jsonPlaceHolderAPI} from "../configs";


const placeHolderAPIService=axios.create({baseURL:jsonPlaceHolderAPI});
const carsAPIService=axios.create({baseURL:carsAPI});

export{
    placeHolderAPIService,
    carsAPIService
}
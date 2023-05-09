import axios from "axios";

import {carsAPI} from "../configs";



const carsAPIService=axios.create({baseURL:carsAPI});

export{
    carsAPIService
}
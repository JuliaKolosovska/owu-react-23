import {carsAPIService} from "./axios.service";
import {urls} from "../configs";

const carService={
    getAll:()=>carsAPIService.get(urls.cars.cars),
    create:(car)=>carsAPIService.post(urls.cars.cars, car),
    updateById:(car, id)=>carsAPIService.put(urls.cars.cars.byId(id),car),
    deleteById:(id)=>carsAPIService.delete(urls.cars.cars.byId(id))
}
export{
    carService
}
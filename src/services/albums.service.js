import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

const albumsService={
    getAll:()=>axiosService.get(urls.albums),


}

export {albumsService}
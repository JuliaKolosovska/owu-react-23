import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

class PostsService{
    getAll() {
    return axiosService.get(urls.posts)}


}

export const postsService=new PostsService()
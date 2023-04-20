import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";


const commentsService = {
    getAll: () => axiosService.get(urls.comments),
    getPost: (postId) => axiosService.get(urls.posts + postId)

}

export {commentsService}
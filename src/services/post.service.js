import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";
import axios from "axios";



const postService = {
    getAll: () => axiosService.get(urls.posts),
    create: (post) => axiosService.put(urls.posts, post)

}

const axiosInstance= axios.create({
    baseURL: 'https://jsonplaceholdertypicode.com/posts',
    headers: {'Content-type': 'application/json; charset=UTF-8'},
});

const savePost = (data)=> axiosInstance.post('',{data:data});


export {postService, savePost}
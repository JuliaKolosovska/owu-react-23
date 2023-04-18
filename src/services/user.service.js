import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";
import axios from "axios";


const userService = {
    getAll: () => axiosService.get(urls.users),
    create: (user) => axiosService.create(urls.users, user)

}

const axiosInstance= axios.create({
baseURL: 'https://jsonplaceholdertypicode.com/users',
headers: {'Content-type': 'application/json; charset=UTF-8'},
});

const saveUser = (data)=> axiosInstance.post('',{data:data});


export {userService, saveUser}
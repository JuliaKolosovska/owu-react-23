import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {userService} from "../../services/user.service";
import {joiResolver} from '@hookform/resolvers/joi';
import {userValidator} from "../../validators/user.validator";
import {saveUser} from "../../services/user.service";

const UserForm = ({setAllUsers}) => {

    const [newUser, setNewUser]=useState({
        name: '',
        email: '',
    });

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };
    const onSubmit = (data) => {
        console.log(data);
        saveUser(data).then(({data}) => console.log(data));

        const userDiv = document.createElement('div');
        const userId = document.createElement('div');
        const userName = document.createElement('div');
        const userUsername = document.createElement('div');
        const userEmail = document.createElement('div');

        userId.innerText = `id: ${Math.floor(Math.random() * 10) + 11}`;
        userName.innerText = `name: ${data.name}`;
        userUsername.innerText = `username: ${data.username}`;
        userEmail.innerText = `email: ${data.email}`;

        userDiv.append(userId, userName, userUsername, userEmail);
               document.body.appendChild(userDiv);
    };




    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input type="text" placeholder={'username'} {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}

            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}

            <button disabled={!isValid}>Save</button>

        </form>
    );
};

export default UserForm;
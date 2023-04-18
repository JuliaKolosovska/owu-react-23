import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/user.validator";
import {savePost} from "../../services/post.service";

const PostForm = ({setAllPosts}) => {

    const [newPost, setNewPost]=useState({
        name: '',
        email: '',
    });

    const {register, handleSubmit, reset, formState: {errors, isValid}} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const handleChange = (event) => {
        const { title, value } = event.target;
        setNewPost((prevPost) => ({
            ...prevPost,
            [title]: value,
        }));
    };
    const onSubmit = (data) => {
        console.log(data);
        savePost(data).then(({data}) => console.log(data));

        const postDiv = document.createElement('div');
        const userId = document.createElement('div');
        const postId = document.createElement('div');
        const postTitle = document.createElement('div');
        const postBody = document.createElement('div');


        postId.innerText = `id: ${data.id}`;
        userId.innerText = `userId: ${Math.floor(Math.random() * 10) + 11}`;
        postTitle.innerText = `title: ${data.title}`;
        postBody.innerText = `body: ${data.body}`;

        postDiv.append(userId, userId, postId, postTitle, postBody);
        document.body.appendChild(postDiv);
    };




    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder={'id'} {...register('id')}/>
            {errors.id && <span>{errors.id.message}</span>}

            <input type="text" placeholder={'title'} {...register('title')}/>
            {errors.title && <span>{errors.title.message}</span>}

            <input type="text" placeholder={'body'} {...register('body')}/>
            {errors.body && <span>{errors.body.message}</span>}

            <button disabled={!isValid}>Save</button>

        </form>
    );
};


export default PostForm;
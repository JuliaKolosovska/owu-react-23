import React, {useEffect, useState} from 'react';
import {postService} from "../../services/post.service";


import Post from "../Post/Post";
import PostForm from "../PostForm/PostForm";

const Posts = () => {
    const [posts, setPosts]=useState([]);

    const [allPosts, setAllPosts]=useState(null);

    useEffect(()=>{
        postService.getAll().then(value=>value.data).then(value=>setPosts(value))
    },[allPosts])
    return (
        <div>
            <PostForm setAllPosts={setAllPosts}/>
            <hr/>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;
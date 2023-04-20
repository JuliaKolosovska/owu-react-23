import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {commentsService} from "../../services/comments.service";

const PostOfComment = () => {
    let {state} = useLocation();
    let {postId} = useParams();
    let [post, setPost] = useState([]);


    useEffect(() => {
        commentsService.getPost(postId.toString()).then(value => value.data)
            .then(value => {
                setPost({...value});
            });
    }, [postId]);
    return (
        <div>


            <div>id:{state.postId}</div>
            <div>title:{post.title}</div>
            <div>body:{post.body}</div>
        </div>
    );
};

export default PostOfComment;
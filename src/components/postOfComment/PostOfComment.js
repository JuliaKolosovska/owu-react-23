import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {commentsService} from "../../services/comments.service";

const PostOfComment = () => {
    let {postId} = useParams();
    let [post, setPost] = useState(null);


    useEffect(() => {
        commentsService.getPost(postId.toString()).then(value => value.data)
            .then(value => {
                setPost({...value});
            });
    }, [postId]);
    return (
        <div>
            <div>userId:{post.userId}</div>
            <div>id:{post.id}</div>
            <div>title:{post.title}</div>
            <div>body:{post.body}</div>
        </div>
    );
};

export default PostOfComment;
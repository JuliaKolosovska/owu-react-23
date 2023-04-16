import React, {useEffect, useState} from 'react';
import UserPost from "../user-post/User-post";

const UserPosts = ({userId}) => {
    let[userPosts, setUserPosts]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(value => {
                setUserPosts(value)
            })
    }, [userId]);
    return (
        <div>
            {userPosts.map(post => <UserPost key={post.id} post={post}/>)}
        </div>
    );
};

export default UserPosts;
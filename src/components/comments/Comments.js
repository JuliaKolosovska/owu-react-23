import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {commentsService} from "../../services/comments.service";
import Comment from "../comment/Comment";


const Comments = () => {
    const [comments, setComments]=useState([])

    useEffect(()=>{
        commentsService.getAll().then(value => value.data).then(value => setComments([...value]))
    },[])

    return (
        <div>
            <div>{
                comments.map(value => <Comment key={value.id} item={value}/>)
            }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Comments;
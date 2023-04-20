import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Comment = ({item}) => {
    const {postId, id, name, email, body} = item;


    return (
        <div>

            <div>
                <Link to={postId.toString()} state={{...item}}>
                <div>postId:{postId}</div>
                <div>id:{id}</div>
                <div>name:{name}</div>
                <div>email:{email}</div>
                <div>body:{body}</div>
            </Link>
                <br/>
            </div>

            <div>
                <Outlet/>
                <hr/>
            </div>

        </div>
    );
};

export default Comment;
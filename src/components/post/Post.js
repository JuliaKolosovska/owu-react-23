import React from 'react';

const Post = ({lift, value}) => {
    return (
        <div>
            {
                <div>

                    <p>id: {value.id}</p>
                    <h4>title: {value.title}</h4>

                    <button onClick={()=>{
                    lift(value)}
                    }>Full post</button>
                    <hr/>

                </div>
            }
        </div>
    );
};

export default Post;
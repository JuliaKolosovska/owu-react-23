import React from 'react';

const User = ({setUserId, user}) => {
    const {id, name, username, email} = user;

    return (

    <div>
        {<div>
            <p>ID: {id}</p>
            <p>Name: {name}</p>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <button onClick={()=>setUserId(id)}>Show posts</button>
           <hr/>
        </div>}
    </div>

    );
};

export default User;
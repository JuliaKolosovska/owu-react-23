import React from 'react';

const Todo = ({item}) => {
    const {userId, id, title, completed} = item;

    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>completed:{completed}</div>
            <hr/>
        </div>
    );
};

export default Todo;
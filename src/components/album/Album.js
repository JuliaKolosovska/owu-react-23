import React from 'react';

const Album = ({item}) => {
    const {userId, id, title} = item;

    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <hr/>
        </div>
    );
};

export default Album;
import React from 'react';

const Simpson = ({item}) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <h4>Age: {item.age}</h4>
            <img width={100} src={item.photo} alt={item.name}/>
            <p>{item.info}</p>
        </div>
    );
};

export default Simpson;
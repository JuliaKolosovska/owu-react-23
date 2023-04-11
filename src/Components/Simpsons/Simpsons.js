import React from 'react';

const Simpsons = (props) => {
    let {itemName}=props;
    let {itemImg}=props;
    let {itemAge}=props;


    return (
        <div>

            <h3>{itemName}</h3>
            <h4>Age: {itemAge}</h4>
            <img width={100} src={itemImg}/>


        </div>
    );
};

export default Simpsons;
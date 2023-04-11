import React from 'react';

const Simpsons = (props) => {
    let {itemName, itemImg, itemAge}=props;



    return (
        <div>

            <h3>{itemName}</h3>
            <h4>Age: {itemAge}</h4>
            <img width={100} src={itemImg} alt={itemName}/>


        </div>
    );
};

export default Simpsons;
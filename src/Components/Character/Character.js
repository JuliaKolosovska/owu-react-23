import React from 'react';

const Character = (props) => {
    let {itemName}=props;
    let {itemImg}=props;
    let {itemSpecies}=props;
    let {itemStatus}=props;
    let {itemGender}=props;
    let {itemId}=props;


    return (
        <div>

            <h3>{itemId}. {itemName}</h3>
            <h4>Species: {itemSpecies}</h4>
            <h4>Status: {itemStatus}</h4>
            <h4>Gender: {itemGender}</h4>
            <img width={150} src={itemImg} alt={itemName}/>


        </div>
    );
};

export default Character;
import React from 'react';

const Character = (props) => {
    let {itemName}=props;
    let {itemImg}=props;
    let {itemSpecies}=props;


    return (
        <div>

            <h3>{itemName}</h3>
            <h4>Species: {itemSpecies}</h4>
            <img width={100} src={itemImg}/>


        </div>
    );
};

export default Character;
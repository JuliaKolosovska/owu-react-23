import React from 'react';
import Simpson from "../Simpson/Simpson";

const Simpsons = ({xxx: simpsons}) => {


    return (
        <div>

            {simpsons.map((value, index) => (<Simpson item={value} key={index}/>))}

        </div>
    );
};

export default Simpsons;
import React from 'react';
import '../../index.css';


const Launch = ({value}) => {
    return (
        <div>
            <div className={'launch'}>
                <h4>{value.mission_name}</h4>
                <p>Launch year: {value.launch_year}</p>
                <img className={'icon'} src={value.links.mission_patch_small} alt={value.mission_name}/>
            </div>
        </div>
    );
};

export default Launch;
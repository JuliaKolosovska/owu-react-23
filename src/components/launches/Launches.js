import React, {useEffect, useState} from 'react';
import Launch from "../launch/Launch";

const Launches = () => {

    let [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => {
                setLaunches(value)
            });
    }, []);

    return (
        <div className={'launches'}>
            {
                launches.filter(({launch_year}) => launch_year !== '2020').map(value => <Launch value={value}
                                                                                                key={value.id}/>)
            }
        </div>
    );
};

export default Launches;
import React from 'react';
import {carService} from "../../services";
import {useDispatch} from "react-redux";
import {carActions} from "../../redux";

const Car = ({car}) => {
    const {id, brand, price, year} = car;

    const dispatch = useDispatch();
    const deleteCar = async () => {
        await carService.deleteById(id)
        dispatch(carActions.changeTrigger())
    }

    return (
        <div>
            <div>id:{id}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate(car))}>update</button>
            <button onClick={deleteCar}>delete</button>
            <br/>
            <br/>
        </div>
    );
};

export {Car};
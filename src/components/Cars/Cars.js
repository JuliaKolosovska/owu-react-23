import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../../services";
import {userActions} from "../../redux";
import {Car} from "../Car/Car";

const Cars = () => {
    const dispatch=useDispatch();
    const {cars, trigger}=useSelector(state=>state.cars);

    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value=>dispatch(userActions.setAll(value)))
    },[dispatch, trigger])
    return (
        <div>
            {
                cars.map(car=><Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export {Cars};
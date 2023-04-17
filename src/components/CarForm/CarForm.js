import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
// import {required} from "joi";
import {carService} from "../../services/car.service";
import {joiResolver} from '@hookform/resolvers/joi';
import {carValidator} from "../../validators/car.validator";


const CarForm = ({setAllCars, carForUpdate,setCarForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode:'all', resolver:joiResolver(carValidator)});

    useEffect(()=>{
if(carForUpdate){
    setValue('brand', carForUpdate.brand, {shouldValidate:true})
    setValue('price', carForUpdate.price, {shouldValidate:true})
    setValue('year', carForUpdate.year, {shouldValidate:true})
}
    },[carForUpdate]);


    const save = async (car) => {
      const {data}= await carService.create(car);
        setAllCars(prev=>!prev);
        reset()
    };

    const update = async (car) => {
        const {data} =await carService.updateById(carForUpdate.id,car)
        setAllCars(prev=>!prev);
        reset();
        const setter=()=>setCarForUpdate(null);
    };

    const deleteCar = async (id) => {
        const {data} =await carService.deleteById(carForUpdate.id)
        setAllCars(prev=>!prev);

        const deleter=()=>setCarForUpdate(null);
        reset();
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>

            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>

            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>

            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate?'Update':'Save'}</button>
            {carForUpdate && (
                <button hidden={!isValid} onClick={() => deleteCar(carForUpdate.id)}>Delete</button>
            )}
        </form>
    );
};

export default CarForm;
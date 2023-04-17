import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {required} from "joi";
import {carService} from "../../services/car.service";
import {joiResolver} from '@hookform/resolvers/joi';
import {carValidator} from "../../validators/car.validator";


const CarForm = ({setAllCars, carForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode:'all', resolver:joiResolver(carValidator)});

    useEffect(()=>{
if(carForUpdate){
    setValue('brand', carForUpdate.brand, {shouldValidate:true})
    setValue('price', carForUpdate.price, {shouldValidate:true})
    setValue('year', carForUpdate.year, {shouldValidate:true})
}
    },[carForUpdate])


    const save = async (car) => {
      const {data}= await carService.create(car);
        setAllCars(prev=>!prev);
        reset()
    }

    const update= async(id, car)=>{
        const {newCar}= await carService.updateById(id, car);
        setAllCars(prev=>!prev);
        reset()
    }
    return (
        <form onSubmit={handleSubmit(carForUpdate?update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            {/*    pattern: {*/}
            {/*        value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/,*/}
            {/*        message: 'Тільки літери, від 1 до 20.'*/}
            {/*    },*/}
            {/*    required:{value:true, message:'required'}*/}
            {/*})}/>*/}
            {errors.brand && <span>{errors.brand.message}</span>}
            <input type="text" placeholder={'price'} {...register('price')}/>
            {/*    valueAsNumber: true,*/}
            {/*    min: {value: 0, message: 'min 0'},*/}
            {/*    max: {value: 1000000, message: 'max 1000000'},*/}
            {/*    required: {value:true, message:'required'}*/}
            {/*})}/>*/}
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'} {...register('year')}/>
            {/*    valueAsNumber: true,*/}
            {/*    min: {value: 1990, message: 'Не старіше 1990 року'},*/}
            {/*    max: {value: new Date().getFullYear(), message: 'Current year'},*/}
            {/*    required:{value:true, message:'required'}*/}
            {/*})}/>*/}
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate?'Update':'Save'}</button>
        </form>
    );
};

export default CarForm;
import React from 'react';
import {useNavigate} from "react-router-dom";
import css from './main.css'

const Header = () => {
    const navigate= useNavigate();
    return (
        <div className={'header'}>
            <h2 onClick={()=>navigate('users')}>Users</h2>
            <h2 onClick={()=>navigate('comments')}>Comments</h2>
            <h2 onClick={()=>navigate('cars')}>Cars</h2>
        </div>
    );
};

export {Header};
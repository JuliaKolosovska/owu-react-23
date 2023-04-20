import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {todosService} from "../../services/todos.service";
import Todo from "../todo/Todo";


const Todos = () => {

    const [todos, setTodos]=useState([])

    useEffect(()=>{
        todosService.getAll().then(value => value.data).then(value => setTodos(value))
    },[])
    return (
        <div>
            <div>{
                todos.map(value => <Todo key={value.id} item={value}/>)
            }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Todos;
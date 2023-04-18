import React, {useEffect, useState} from 'react';
import {userService} from "../../services/user.service";
import UserForm from "../UserForm/UserForm";
import User from "../User/User";

const Users = () => {
    const [users, setUsers]=useState([]);

    const [allUsers, setAllUsers]=useState(null);

    useEffect(()=>{
        userService.getAll().then(value=>value.data).then(value=>setUsers(value))
    },[allUsers])
    return (
        <div>
            <UserForm setAllUsers={setAllUsers}/>
            <hr/>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export default Users;
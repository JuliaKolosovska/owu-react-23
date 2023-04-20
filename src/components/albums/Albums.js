import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {albumsService} from "../../services/albums.service";
import Album from "../album/Album"

const Albums = () => {
    const [albums, setAlbums]=useState([])

    useEffect(()=>{
        albumsService.getAll().then(value => value.data).then(value => setAlbums(value))
    },[])
    return (
        <div>
            <div>{
                albums.map(value => <Album key={value.id} item={value}/>)
            }
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export default Albums;
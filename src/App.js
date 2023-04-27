import {Link, Routes, Route, Navigate} from "react-router-dom";
import './App.css';

import {Posts} from "./components/posts/Posts";
import {Comments} from "./components/comments/Comments";
import MainLayout from "./layouts/mainLayout/MainLayout";
import CatDogPage from "./pages/catDogPage/CatDogPage";


function App() {
    return (
        <div className="App">
            <div className="menu">
                <h3>
                    <Link to={'/cat_dog'}>Cat-Dog</Link>
                </h3>
                <h3>
                    <Link to={'/comments'}>Comments</Link>
                </h3>
                <h3>
                    <Link to={'/posts '}>Posts </Link>
                </h3>

            </div>
            <div>

                <Routes>
                    <Route path={'/'} element={<MainLayout/>}>
                        <Route index element={<Navigate to={'cat_dog'}/>}/>
                        <Route path={'/cat_dog'} element={<CatDogPage/>}/>
                        <Route path={'/posts'} element={<Posts/>}/>
                        <Route path={'/comments'} element={<Comments/>}/>
                    </Route>
                </Routes>


            </div>
        </div>
    );
}

export default App;

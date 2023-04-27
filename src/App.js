import {Link, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/home/Home";
import {Posts} from "./components/posts/Posts";
import {Comments} from "./components/comments/Comments";


function App() {
    return (
        <div className="App">
            <div className="menu">
                <h3>
                    <Link to={'/'}>Home</Link>
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
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/posts'} element={<Posts/>}/>
                    <Route path={'/comments'} element={<Comments/>}/>
                </Routes>


            </div>
        </div>
    );
}

export default App;

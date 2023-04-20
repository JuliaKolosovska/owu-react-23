import {Link, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/home/Home";
import Todos from "./components/todos/Todos";
import Albums from "./components/albums/Albums";
import Comments from "./components/comments/Comments";

function App() {
    return (
        <div className="App">
            <div className="menu">
                <h3>
                    <Link to={'/'}>Home</Link>
                </h3>
                <h3>
                    <Link to={'/todos'}>Todos</Link>
                </h3>
                <h3>
                    <Link to={'/albums '}>Albums </Link>
                </h3>
                <h3>
                    <Link to={'/comments '}>Comments </Link>
                </h3>
            </div>
            <div>

                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/todos'} element={<Todos/>}/>
                        <Route path={'/albums'} element={<Albums/>}/>
                        <Route path={'/comments'} element={<Comments/>}/>
                </Routes>


            </div>
        </div>
);
}

export default App;

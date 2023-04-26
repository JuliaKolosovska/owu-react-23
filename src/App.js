
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="menu">
            <h3>
                <Link to={'/'}>Home</Link>
            </h3>
            <h3>
                <Link to={'/users'}>Todos</Link>
            </h3>
            <h3>
                <Link to={'/comments '}>Albums </Link>
            </h3>
                   </div>
        <div>

            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/todos'} element={<Todos/>}/>
                <Route path={'/albums'} element={<Albums/>}/>
                <Route path={'/comments'} element={<Comments/>}>
                    <Route path={':postId'} element={<PostOfComment/>}/>
                </Route>
            </Routes>


        </div>
    </div>
  );
}

export default App;

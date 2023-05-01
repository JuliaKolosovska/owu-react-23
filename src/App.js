import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset} from "./redux";






function App() {
    let store=useSelector(state=>state);
    let dispatch=useDispatch();

    const incr= () => {
        dispatch(increment())
    }
    const decr = () => {
        dispatch(decrement())
    }
    const res = () => {
        dispatch(reset())
    }
  return (
    <div>
     <h1>{store}</h1>
      <button onClick={incr}>INCREMENT</button>
      <button onClick={decr}>DECREMENT</button>
      <button onClick={res}>RESET</button>
    </div>
  );
}

export default App;

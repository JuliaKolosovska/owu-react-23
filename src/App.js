import Simpsons from "./Components/Simpsons/Simpsons";
import './App.css';
import React from "react";

function App() {
    return (
        <div className="App">
            <h1>Simpsons</h1>
            <Simpsons itemName={'Bart'}
                      itemAge={10}
                      itemImg={'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'}/>
            <Simpsons itemName={'Homer'}
                      itemAge={40}
                      itemImg={'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}/>
            <Simpsons itemName={'Marge'}
                      itemAge={38}
                      itemImg={'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'}/>
            <Simpsons itemName={'Lisa'}
                      itemAge={9}
                      itemImg={'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'}/>
            <Simpsons itemName={'Meggie'}
                      itemAge={1}
                      itemImg={'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'}/>
        </div>
    );
}

export default App;

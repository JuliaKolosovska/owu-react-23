import Character from "./Components/Character/Character";
import './App.css';
import React from "react";

function App() {
    return (
        <div className="App">
            <h1>Rick and Morty</h1>
            <Character itemName={'Rick Sanchez'}
                       itemSpecies={'Human'}
                      itemImg={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
            <Character itemName={'Morty Smith'}
                       itemSpecies={'Human'}
                      itemImg={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
            <Character itemName={'Summer Smith'}
                       itemSpecies={'Human'}
                      itemImg={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
            <Character itemName={'Beth Smith'}
                       itemSpecies={'Human'}
                      itemImg={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
            <Character itemName={'Jerry Smith'}
                       itemSpecies={'Human'}
                      itemImg={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>
            <Character itemName={'Abadango Cluster Princess'}
                       itemSpecies={'Alien'}
                      itemImg={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>
        </div>
    );
}

export default App;

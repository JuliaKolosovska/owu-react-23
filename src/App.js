import Character from "./Components/Character/Character";
import './App.css';
import React from "react";

function App() {
    return (
        <div className="App">
            <h1>Rick and Morty</h1>
            <Character itemId={1}
                        itemName={'Rick Sanchez'}
                       itemSpecies={'Human'}
                       itemStatus={'Alive'}
                       itemGender={'Male'}
                      itemImg={'https://rickandmortyapi.com/api/character/avatar/1.jpeg'}/>
            <Character itemId={2}
                       itemName={'Morty Smith'}
                       itemSpecies={'Human'}
                       itemStatus={'Alive'}
                       itemGender={'Male'}
                      itemImg={'https://rickandmortyapi.com/api/character/avatar/2.jpeg'}/>
            <Character itemId={3}
                       itemName={'Summer Smith'}
                       itemSpecies={'Human'}
                       itemStatus={'Alive'}
                       itemGender={'Female'}
                      itemImg={'https://rickandmortyapi.com/api/character/avatar/3.jpeg'}/>
            <Character itemId={4}
                       itemName={'Beth Smith'}
                       itemSpecies={'Human'}
                       itemStatus={'Alive'}
                       itemGender={'Female'}
                      itemImg={'https://rickandmortyapi.com/api/character/avatar/4.jpeg'}/>
            <Character itemId={5}
                       itemName={'Jerry Smith'}
                       itemSpecies={'Human'}
                       itemStatus={'Alive'}
                       itemGender={'Male'}
                      itemImg={'https://rickandmortyapi.com/api/character/avatar/5.jpeg'}/>
            <Character itemId={6}
                       itemName={'Abadango Cluster Princess'}
                       itemSpecies={'Alien'}
                       itemStatus={'Alive'}
                       itemGender={'Female'}
                      itemImg={'https://rickandmortyapi.com/api/character/avatar/6.jpeg'}/>
        </div>
    );
}

export default App;

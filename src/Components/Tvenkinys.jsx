import React from "react";
import Daiktas from "./Daiktas"

const seaPlaners = [
    { id: 1, type: "man", name: "Linas", color: "blue" },
    { id: 2, type: "car", name: "Opel", color: "red" },
    { id: 3, type: "animal", name: "Vilkas", color: "green" },
    { id: 4, type: "fish", name: "Ungurys", color: "yellow" },
    { id: 5, type: "man", name: "Tomas", color: "green" },
    { id: 6, type: "animal", name: "Bebras", color: "red" },
    { id: 7, type: "animal", name: "Barsukas", color: "green" },
    { id: 8, type: "car", name: "BMW", color: "blue" },
    { id: 9, type: "car", name: "ZIL", color: "red" },
    { id: 10, type: "man", name: "Teta Zita", color: "yellow" },
  ];

  function Tvenkinys() {
    const oddPlaners = seaPlaners.filter(planer => planer.id %2 != 0)
    const evenPlaners = seaPlaners.filter(planer => planer.id %2 === 0)

    return(
        <div>
            <div>
                <h1>Odd names</h1>
            <Daiktas seaPlaners = {oddPlaners}/>
            </div>
            <div>
                <h1>Even names</h1>
                <Daiktas seaPlaners = {evenPlaners}/>
            </div>
        </div>
    )
  }

  export default Tvenkinys;
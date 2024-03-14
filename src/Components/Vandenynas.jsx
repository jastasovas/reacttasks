import React from "react";
import Tipas from "./Tipas";
import Vardas from "./Vardas";
import Spalva from "./Spalva";



function Vandenynas ({seaPlaners}) {
    const sortedPlaners = [
        { name: 'Tipas', seaPlaners: seaPlaners.slice().sort((a, b) => a.type.localeCompare(b.type)) },
        { name: 'Vardas', seaPlaners: seaPlaners.slice().sort((a, b) => a.name.localeCompare(b.name)) },
        { name: 'Spalva', seaPlaners: seaPlaners.slice().sort((a, b) => a.color.localeCompare(b.color)) },
      ];

      return (
        <div>
            {sortedPlaners.map(({ name, seaPlaners }) => (
        <div key={name}>
          <h2>{name}</h2>
          <Tipas seaPlaners={seaPlaners} />
          <Vardas seaPlaners={seaPlaners} />
          <Spalva seaPlaners={seaPlaners} />
        </div>
      ))}
        </div>
      )
}

export default Vandenynas;
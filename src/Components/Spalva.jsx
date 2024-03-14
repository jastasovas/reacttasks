import React from "react";

function Spalva({seaPlaners}){
    <div>
        <h2>Spalva</h2>
        {seaPlaners.map(({ id, type, name, color }) => (
      <div key={id}>
        <p>Type: {type}</p>
        <p>Name: {name}</p>
        <p>Color: {color}</p>
      </div>
    ))}
    </div>
}

export default Spalva;
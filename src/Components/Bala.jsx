import React from "react";

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

const style = {border: '1px solid silver'}

  function RenderData() {
    return(
        <div>
            <h1>Data table</h1>
            <table style = {style}>
                <thead >
                    <tr>
                        <th>Id</th>
                        <th>Type</th>
                        <th>Name</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody >
                    {seaPlaners.map((val, key) =>{
                        return(
                            <tr  key = {key}>
                                <td >{val.id}</td>
                                <td>{val.type}</td>
                                <td>{val.name}</td>
                                <td>{val.color}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
  }

  export default RenderData;
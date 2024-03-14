import React from "react";


function Gyventojai({seaPlaners, color}) {
    const filterPlaners = color ? seaPlaners.filter((seaPlaner) => seaPlaner.color === color) : seaPlaners;

    return(
        <div>
            {filterPlaners.map((seaPlaner) =>(
                <p key={seaPlaner.id}>
                    {seaPlaner.name}
                </p>
            ))}
        </div>
    )
}

export default Gyventojai;
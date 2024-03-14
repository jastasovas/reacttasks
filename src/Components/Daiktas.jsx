import React from "react";



function Daiktas({seaPlaners}){
    return(
        <div>
            {seaPlaners.map(planer =>(
                <div key={planer.id}>
                    <h3>{planer.name}</h3>
                </div>

            ))}
        </div>
    )
}




export default Daiktas;
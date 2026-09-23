import React from "react";

function Nome(props){
    return(
        <header className="alert alert-primary text-center shadow-sm mb-4">
            <h4 className="mb-0">Nome: <strong>{props.nome}</strong></h4>
        </header>
    )
}
export default Nome;
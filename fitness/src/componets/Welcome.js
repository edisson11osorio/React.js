import React from "react";
import "./styles/Welcome.css";

function Welcome(props){
    return (
        <div className="container">
            <div className="Fitness-User-Info">

                <h1>hello, {props.username}!</h1>
                <p>{props.info}</p>
            </div>
        </div>
    )

}

export default Welcome
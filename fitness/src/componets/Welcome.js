import React from "react";
import "./styles/Welcome.css";

const Welcome = ({ username, info }) => (
    <div className="container">
        <div className="Fitness-User-Info">

            <h1>hello, {username}!</h1>
            <p>{info}</p>
        </div>
    </div>
)

// function Welcome(props) {
//     return (
//         <div className="container">
//             <div className="Fitness-User-Info">

//                 <h1>hello, {props.username}!</h1>
//                 <p>{props.info}</p>
//             </div>
//         </div>
//     )

// }

export default Welcome
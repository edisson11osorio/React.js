import React from "react";
import Imagen from '../images/add.png';
import "./styles/AddButton.css"

class AddButton extends React.Component{
    render(){
        return(
            <div className="Fitness-Add">
            <img src={Imagen}/>
            </div>
        )

    }
         
}
export default AddButton
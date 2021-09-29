import React from "react";
import Imagen from '../images/add.png';
import { Link } from "react-router-dom";
import "./styles/AddButton.css"

const AddButton = () => (
    <Link to="/exercise/new">
        <img src={Imagen} className="Fitness-Add" />
    </Link>
)

export default AddButton
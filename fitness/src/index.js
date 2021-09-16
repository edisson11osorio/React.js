import React from "react";
import reactDom from "react-dom";
import Exercises from "./Pages/Exercises";
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')

reactDom.render(<Exercises/>, container)
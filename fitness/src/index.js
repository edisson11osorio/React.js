import React from "react";
import reactDom from "react-dom";
import App from './componets/App'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')

reactDom.render(<App/>, container)
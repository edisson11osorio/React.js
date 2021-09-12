import React from "react";
import reactDom from "react-dom";
import Card from "./componets/Card";
import 'bootstrap/dist/css/bootstrap.css'



const container = document.getElementById('root')

reactDom.render(<Card

                 title="Tecnique Guides"
                 description="Learn amazing street workout and calisthenics"
                 leftcolor="#A74CF2"
                 rightcolor="#617BFB"

            />, container)
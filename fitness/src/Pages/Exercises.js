import React from "react";
import Card from "../componets/Card";
import Welcome from '../componets/Welcome';

class Exercises extends React.Component {
    render() {
        return (
            <div>
                <Welcome
                    username="edisson"
                    info="let`s workout to get someone gains!"
                />
                <Card
                    title="Tecnique Guides"
                    description="Learn amazing street workout and calisthenics"
                    leftcolor="#A74CF2"
                    rightcolor="#617BFB"
                />
            </div>
        )
    }
}
export default Exercises
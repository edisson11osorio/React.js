import React from "react";
import Card from "./Card";

function ExerciseList(props){
        return(
             <div>
                 { props.exercises.map((exercise) => {
                    return (
                        <Card
                            title={exercise.title}
                            description={exercise.description}
                            leftcolor={exercise.leftColor}
                            rightcolor={exercise.rightColor}
                        />
                    )
                })}
             </div> 
        )
}
export default ExerciseList
import React from "react";
import Card from "./Card";

const   ExerciseList = ({exercises}) => (
    <div>
    { exercises.map((exercise) => {
       return (
           <Card
               key={exercise.id}
               title={exercise.title}
               description={exercise.description}
               leftcolor={exercise.leftColor}
               rightcolor={exercise.rightColor}
           />
       )
   })}
</div> 
)

export default ExerciseList
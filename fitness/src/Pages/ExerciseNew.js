import React from "react";

class ExerciseNew extends React.Component{

       
    handleClick = () => {
        console.log('click')
    }  

    render(){
           return(
               <button onClick={this.handleClick}>
                    Send
               </button>
           )
       }
}
export default ExerciseNew
import React from "react";
import exerciseImg from "../images/exercise.png"
import "./styles/Card.css"
import circlesImg from "../images/circles.png"

class Card extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Image: 'https://firebasestorage.googleapis.com/v0/b/tutoriales-e4830.appspot.com/o/bulbasaur.png?alt=media&token=567caf19-af47-414e-a9d4-3854ab24c7dc'
        }

    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTAwytEEHSUCGKTjSzAtBTHGOEqUJaFLzQaQ&usqp=CAU'
            })

        }, 5000)
    }
    render() {
        const { title, description, leftcolor, rightcolor } = this.props
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftcolor}, ${rightcolor})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={exerciseImg} className="float-right" />
                            <img src={this.state.Image} />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;
import React from 'react';
import './GameCont.css';
import Axios from 'axios';
import { Container, Row} from 'react-bootstrap';
import GameCard from './GameCard/GameCard';


class GameCont extends React.Component {
    constructor() {
        super();
        this.state = {
            games: []
        }
    }
// Getting info from the API
    componentDidMount() {
        Axios.get(`https://brainsterboxapi.herokuapp.com/games`)
            .then(res => {
                console.log(res);
                console.log(res.data);

                this.setState({
                    games: res.data
                })
            });
        }

    render() {
        return (
            <Container className=" GameCont">
                <Row>
                {this.state.games.map(game => {
                    return (                        
                        <GameCard 
                            id={parseInt(game.id)}
                            image={game.image}
                            title={game.title}
                            category={game.category}
                            time={game.timeFrame}
                            description={game.description}
                        />
                    )
                })}
                </Row>
            </Container>
        )
    }
}

export default GameCont;
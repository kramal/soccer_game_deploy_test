import React, { Component } from 'react';
import photosMap from '../photo-map';
import './pages.css';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPhoto: '',
            currentPhotoBallRevealed: '',
            currentCorrectAnswer: '',
            //points: 0,
            didAnswerCorrectly: '',
            timer: 0,
            disableTime: 4000
        };
    }

    componentWillMount() {
        this.changePhoto();
    }

    componentDidMount() {
        this.startRound();
    }

    startRound() {
        this.setState({
            timer: 10
        });
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    tick = () => {
        var timer = this.state.timer;
        console.log(timer);
        if (timer === 0) {
            clearInterval(this.timerID);
            window.location.pathname = "/GameOver"
            return;
        }
        this.setState({
            timer: timer - 1
        });
    }

    changePhoto() {
        var availablePhotos = ['A1'];
        var rand = Math.floor(Math.random() * availablePhotos.length);
        var photo = availablePhotos[rand];
        console.log(photo);
        var answer = photosMap[photo].correct;
        var revealed = photosMap[photo].revealed;

        this.setState({
            currentPhoto: photo,
            currentCorrectAnswer: answer,
            currentPhotoBallRevealed: revealed
        });
    }
    
    checkAnswer = (e) => {
        var button = e.target;
        button.disabled = true;
        {/*setTimeout(e => {
            button.disabled = false;
        }, this.state.disableTime);*/}
        var answer = e.target.textContent;
        if (answer == this.state.currentCorrectAnswer) {
            /*console.log("Correct answer");
            this.showAnswer(true);*/
            window.location.pathname = "/RightAnswer"
        } else {
            //this.showAnswer(false);
            //this.state.history.push('/WrongAnswer');
            window.location.pathname = "/WrongAnswer"
        }
        {/*setTimeout(e => {
            this.changePhoto();
            this.setState({
                didAnswerCorrectly: ''
            })
        }, this.state.disableTime);*/}
        
    }


    showAnswer(correct) {
        if (correct) {
            this.setState({
                didAnswerCorrectly: true
            })
        } else {
            this.setState({
                didAnswerCorrectly: false
            })
        }
    }

    // Save username & score to localHost and restart the game
    restartGame = (inputValue) => {
        var username = inputValue.toString();
        var points = parseInt(this.state.points);
        if (localStorage.getItem('spot-the-ball-' + inputValue)) {
            if (points > parseInt(localStorage.getItem(inputValue))) {
                localStorage.setItem('spot-the-ball-' + inputValue, points);
            }
        } else {
            localStorage.setItem('spot-the-ball-' + inputValue, points);
        }
        this.setState({
            points: 0,
        })
        this.startRound();
    }

    render() {
        return (
            <>  
                <div className='Heading'>
                    <h1>SPOT THE BALL</h1>
                    <h2>and win R180 000 in Airtime & Data</h2>
                </div>
                <Container photo={this.state.currentPhoto} answer={this.state.didAnswerCorrectly} photoRevealed={this.state.currentPhotoBallRevealed}/>
                <Controls onClick={this.checkAnswer} />
                <Timer time={this.state.timer} />
                {/*<PointsCounter points={this.state.points} />*/}
                {/*<GameOver time={this.state.timer} onClick={this.restartGame}/>*/}
            </> 
        );
    }
}
export default Home;


/* Container rendering the photos */
class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        var backgroundPhoto = "./photos/" + this.props.photo + ".jpg";
        var backgroundPhotoBallRevealed = "./photos/" + this.props.photoRevealed + ".jpg";
        return <div className="Container" style={{backgroundImage: "url(" + require(`${backgroundPhoto}`) + ")"}}>
            { this.props.answer === true &&
                <div className='MessageBox AnswerCorrect' style={{backgroundImage: "url(" + require(`${backgroundPhotoBallRevealed}`) + ")"}}></div>
            }
            { this.props.answer === false &&
                <div className='MessageBox AnswerIncorrect' style={{backgroundImage: "url(" + require(`${backgroundPhotoBallRevealed}`) + ")"}}></div>
            }
        </div>
    }
}

/* Button controls for choosing the right answer */
function Controls(props) {
    return (
            <div className="container2">
                <h2>Choose the button below where you think the ball above is!</h2>
                <div className="ControlsContainer">
                    <button className="ControlsButton" onClick={props.onClick}>1</button>
                    <button className="ControlsButton" onClick={props.onClick}>2</button>
                    <button className="ControlsButton" onClick={props.onClick}>3</button>
                    <button className="ControlsButton" onClick={props.onClick}>4</button>
                    <button className="ControlsButton" onClick={props.onClick}>5</button>
                    <button className="ControlsButton" onClick={props.onClick}>6</button>
                </div>
            {/* <button className="confirmButton" onClick={props.onClick}>Confirm</button>*/}
            </div>
           
    
    );
}

function Timer(props) {
    return (
        <div className="Timer Counter">{props.time}</div>
    )
}


/*function PointsCounter(props) {
    return (
        <div className="PointsCounter Counter">{props.points}</div>
    )
}*/



/*class Scoreboard extends Component {
    constructor() {
        super();
    }

    displayUsernames = () => {
        const keys = Object.keys(localStorage);
        var users = keys.filter(key => key.includes('spot-the-ball-'));
        // sort the users array
        const filtered = Object.keys(localStorage)
            .filter(key => key.includes('spot-the-ball-'))
            .reduce((obj, key) => {
                obj[key] = localStorage[key];
                return obj;
            }, {});
        console.log(filtered)

        var usernameByScore = [];
        for (var username in filtered) {
            usernameByScore.push([username, filtered[username]]);
        }
        usernameByScore.sort(function(a, b) {
            return b[1] - a[1];
        });
        console.log(usernameByScore);

        return (
            <ul>
                {usernameByScore.map((user, index) => <li>
                    <span>{index+1 + '. ' + user[0].slice(14,user[0].length) + ': '}</span>
                    <span>{user[1]}</span>
                </li>)}
            </ul>
        )

    }

    render() {
        return (
            <div className="Scoreboard">
                <h1>Leadership board</h1>
                {this.displayUsernames()}
            </div>
        )
    }
}*/

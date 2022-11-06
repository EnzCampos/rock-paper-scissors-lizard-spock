import GameIcon from "./gameIcon"
import React, { useEffect } from 'react'

export default function PlayedGame(props) {
    const [housePick, changeHousePick ] = React.useState();
    const [gameStatus, setGameStatus ] = React.useState();

    let playerPick = props.playedOption;

    function randomHousePick() {
        let options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
        let randomOption = options[Math.floor(Math.random() * options.length)];
        changeHousePick(randomOption);
    }

    useEffect(() => {
        setTimeout(randomHousePick,4000);
    },[]);

    //This is the game Logic, see it in the rules img

    function playerDidWin() {
        if (!housePick) return

        if (playerPick === housePick) {
            setGameStatus("Draw")
        }
        else if ((housePick === 'paper' || housePick === 'lizard') && playerPick === 'scissors') {
            setGameStatus('Win')
        }

        else if ((housePick === 'rock' || housePick === 'spock') && playerPick === 'paper') {
            setGameStatus('Win')
        }

        else if ((housePick === 'scissors' || housePick === 'lizard') && playerPick === 'rock') {
            setGameStatus('Win')
        }

        else if ((housePick === 'spock' || housePick === 'paper') && playerPick === 'lizard') {
            setGameStatus('Win')
        }

        else if ((housePick === 'scissors' || housePick === 'rock') && playerPick === 'spock') {
            setGameStatus('Win')
        }

        else {
            setGameStatus('Lose')
        }
    };

    useEffect(()=>{
        setTimeout(playerDidWin, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[housePick]);

    function newGame() {
        props.changePlayedOption()
        props.changeScore(gameStatus)
    }

    return (
        <div className={`flex playedGame ${gameStatus ? 'game-finished' : ''}`}>
            <div className='player-pick white'>
                <h3 className="pick-text">YOU PICKED</h3>
                <GameIcon icon={props.playedOption} bigIcon='big' onClickFunc={()=> {return}} win={gameStatus === 'Win'? 'win': ''}/>
            </div>
            { gameStatus && 
            <div className="play-again">
                <h2 className="game-finished-text">{gameStatus === "Win" || gameStatus === "Lose" ? `YOU ${gameStatus.toUpperCase()}` : "It's a Draw"}</h2>
                <button className="play-again-btn" onClick={newGame}>PLAY AGAIN</button>
            </div>
            }
            <div className='house-pick white'>
                <h3 className="pick-text">THE HOUSE PICKED</h3>
                { housePick ? 
                <GameIcon icon={housePick} bigIcon='big' onClickFunc={()=> {return}} win={ gameStatus === 'Lose'? 'win': ''}/> :
                <div className="emptyIcon"></div>
                }
            </div>
        </div>
    )
}
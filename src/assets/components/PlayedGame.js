import GameIcon from "./gameIcon"
import React, { useEffect } from 'react'

export default function PlayedGame(props) {
    const [housePick, changeHousePick ] = React.useState()

    function randomHousePick() {
        let options = ['rock', 'paper', 'scissors', 'lizard', 'spock']
        let randomOption = options[Math.floor(Math.random() * options.length)]
        changeHousePick(randomOption)
    }

    useEffect(() => {
        setTimeout(randomHousePick,4400)
    },[])

    return (
        <div className='flex playedGame'>
            <div className='player-pick white'>
                <h3 className="pick-text">YOU PICKED</h3>
                <GameIcon icon={props.playedOption} bigIcon='big'/>
            </div>
            <div className='house-pick white'>
                <h3 className="pick-text">THE HOUSE PICKED</h3>
                { housePick ? 
                <GameIcon icon={housePick} bigIcon='big'/> :
                <div className="emptyIcon"></div>
                }
            </div>
        </div>
    )
}
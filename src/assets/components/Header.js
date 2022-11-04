import logo from '../images/logo-bonus.svg'
import React from 'react'

export default function Header(props) {
    return (
        <header>
          <img src={logo} alt='Logo'/>
          <div className='score-div'>
            <h3 className='score'>Score</h3>
            <h2 className='score-number'>{props.score}</h2>
          </div>
        </header>
    )
}
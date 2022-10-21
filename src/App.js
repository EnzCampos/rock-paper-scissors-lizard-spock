import logo from './logo-bonus.svg'
import React from 'react'
import scissors from './icon-scissors.svg'
import lizard from './icon-lizard.svg'
import paper from './icon-paper.svg'
import rock from './icon-rock.svg'
import spock from './icon-spock.svg'


function App() {

  const [score, setScore] = React.useState(0)

  return (
    <div className="App">
      <header>
        <img src={logo} alt='Logo'/>
        <div className='score-div'>
          <h3 className='score'>Score</h3>
          <h2 className='score-number'>{score}</h2>
        </div>
      </header>
      <main>
        <div className='play scissors'>
          <img src={scissors} alt='scissors' className='play-icon'/>
        </div>
        <div className='play spock'>
          <img src={spock} alt='spock' className='play-icon'/>
        </div>
        <div className='play paper'>
          <img src={paper} alt='paper' className='play-icon'/>
        </div>
        <div className='play lizard'>
          <img src={lizard} alt='lizard' className='play-icon'/>
        </div>
        <div className='play rock'>
          <img src={rock} alt='rock' className='play-icon'/>
        </div>
      </main>
    </div>
  );
}

export default App;

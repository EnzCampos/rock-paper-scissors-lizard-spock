import logo from './logo-bonus.svg'
import React from 'react'
import scissors from './icon-scissors.svg'
import lizard from './icon-lizard.svg'
import paper from './icon-paper.svg'
import rock from './icon-rock.svg'
import spock from './icon-spock.svg'
import rules from './image-rules-bonus.svg'
import close from './icon-close.svg'


function App() {

  const [score, setScore] = React.useState(0)
  const [showRules, setShowRules] = React.useState(false)



  return (
    <div className="App">
      <section style={{opacity: showRules ? "50%" : "100%"}} className='main-content'>
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
            <img src={spock} alt='spock' className='play-icon spockImg'/>
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
      </section>
      <section>
        <div>
          <button className='rules' onClick={()=>{setShowRules(true)}}>Rules</button>
        </div>
        {showRules &&
        <div className='rule-div'>
          <div className='flex'>
            <h2 className='rules-text'>RULES</h2>
            <img src={close} alt='close button' className='close-rule' onClick={()=>{setShowRules(false)}}/>
          </div>
          <img src={rules} alt='Rules' className='rule-img'/>
        </div>
        }
      </section>
    </div>
  );
}

export default App;

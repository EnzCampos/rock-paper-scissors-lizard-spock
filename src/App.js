import React, { useEffect } from 'react'
import Header from './assets/components/Header.js'
import InPlay from './assets/components/Play.js'
import Rules from './assets/components/Rules.js'
import PlayedGame from './assets/components/PlayedGame'
function App() {

  const [ score, setScore ] = React.useState(localStorage.getItem('score') ? localStorage.getItem('score') : 0)
  const [ showRules, setShowRules ] = React.useState(false)
  const [ playedOption, setPlayedOption ] = React.useState()

  useEffect(()=>{
    localStorage.setItem('score', score)
  },[score])

  function changeScore(gameCondition) {

    if (gameCondition === 'Win') {
      setScore((prevScore) => (parseInt(prevScore) + 1))
    }
    if (gameCondition === 'Lose') {
      setScore((prevScore) => (parseInt(prevScore) - 1))
    }
  }

  return (
    <div className="App">
      <section style={{ opacity: showRules ? "50%" : "100%" }} className='main-content'>
        <Header score={score}/>
        <main>
          { !playedOption && 
          <InPlay onClickFunc={setPlayedOption}/> }
          { playedOption &&  
          <PlayedGame playedOption={playedOption} changeScore={changeScore} changePlayedOption={setPlayedOption}/>}
        </main>
      </section>
      <section>
        <div>
          <button className='rules' onClick={()=>{setShowRules(true)}}>Rules</button>
        </div>
        { showRules && <Rules setShowRules={setShowRules}/> }
      </section>
    </div>
  );
}

export default App;

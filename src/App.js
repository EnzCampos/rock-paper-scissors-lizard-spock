import React from 'react'
import Header from './assets/components/Header.js'
import InPlay from './assets/components/Play.js'
import Rules from './assets/components/Rules.js'

function App() {

  const [ score, setScore ] = React.useState(0)
  const [ showRules, setShowRules ] = React.useState(false)
  const [ playedOption, setPlayedOption ] = React.useState()

  return (
    <div className="App">
      <section style={{ opacity: showRules ? "50%" : "100%" }} className='main-content'>
        <Header score={score}/>
        <main>
          { !playedOption && 
          <InPlay onClickFunc={setPlayedOption}/> }
          { playedOption && 
          <div className='flex'>
              <div className='player-pick white'>
              You picked
              <div className='play'>
                <img src='' alt='Player Picked Option' className='play-icon'/>
              </div>
              </div>
              <div className='house-pick white'>
              The House Picked
              </div>
          </div>}
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

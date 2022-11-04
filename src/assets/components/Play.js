import scissors from '../images/icon-scissors.svg'
import lizard from '../images/icon-lizard.svg'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import spock from '../images/icon-spock.svg'
import GameIcon from './gameIcon.js'


export default function InPlay(props) {
    return (
        <section className='play-div'>
            <GameIcon icon='scissors' imgSrc={scissors} onClickFunc={props.onClickFunc}/>
            <GameIcon icon='spock' imgSrc={spock} onClickFunc={props.onClickFunc}/>
            <GameIcon icon='paper' imgSrc={paper} onClickFunc={props.onClickFunc}/>
            <GameIcon icon='lizard' imgSrc={lizard} onClickFunc={props.onClickFunc}/>
            <GameIcon icon='rock' imgSrc={rock} onClickFunc={props.onClickFunc}/>
        </section>
    )
}
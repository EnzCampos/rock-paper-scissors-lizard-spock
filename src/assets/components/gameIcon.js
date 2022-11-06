import scissors from '../images/icon-scissors.svg'
import lizard from '../images/icon-lizard.svg'
import paper from '../images/icon-paper.svg'
import rock from '../images/icon-rock.svg'
import spock from '../images/icon-spock.svg'

export default function GameIcon(props) {
    let imgSrc = ''

    switch(props.icon) {
        case 'scissors':
            imgSrc = scissors
            break
        case 'lizard':
            imgSrc = lizard
            break
        case 'paper':
            imgSrc = paper
            break
        case 'rock':
            imgSrc = rock
            break
        default:
            imgSrc = spock
            break
    }

    return (
        <div className={`play ${props.icon} ${props.bigIcon} ${props.win}`} onClick={()=>{props.onClickFunc(props.icon)}}>
            <img src={imgSrc} alt={props.icon} className={`play-icon ${props.icon}-svg ${props.bigIcon}-svg`}/>
        </div>
    )
}
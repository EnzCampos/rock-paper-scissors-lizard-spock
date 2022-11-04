import GameIcon from './gameIcon.js'

export default function InPlay(props) {
    return (
        <section className='play-div'>
            <GameIcon icon='scissors' onClickFunc={props.onClickFunc}/>
            <GameIcon icon='spock' onClickFunc={props.onClickFunc}/>
            <GameIcon icon='paper' onClickFunc={props.onClickFunc}/>
            <GameIcon icon='lizard' onClickFunc={props.onClickFunc}/>
            <GameIcon icon='rock' onClickFunc={props.onClickFunc}/>
        </section>
    )
}
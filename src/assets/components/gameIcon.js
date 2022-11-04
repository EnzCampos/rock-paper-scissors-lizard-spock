export default function GameIcon(props) {
    return (
        <div className={`play ${props.icon}`} onClick={()=>{props.onClickFunc(props.icon)}}>
            <img src={props.imgSrc} alt={props.icon} className={`play-icon ${props.icon}-svg`}/>
        </div>
    )
}
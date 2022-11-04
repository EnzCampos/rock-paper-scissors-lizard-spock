import rules from '../images/image-rules-bonus.svg'
import close from '../images/icon-close.svg'

export default function Rules(props) {
    return (
        <div className='rule-div'>
            <div className='flex'>
                <h2 className='rules-text'>RULES</h2>
                <img src={close} alt='close button' className='close-rule' onClick={()=>{props.setShowRules(false)}}/>
            </div>
            <img src={rules} alt='Rules' className='rule-img'/>
        </div>
    )
}
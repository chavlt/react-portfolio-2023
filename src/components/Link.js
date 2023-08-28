import arrow_right from '../assets/arrow-right.svg'
import '../styles/Link.scss'


function Link({link, text}){
    return(
        <a className="link" href={link}>{text} <img src={arrow_right} alt="arrow-right"></img></a>
    )
}

export default Link
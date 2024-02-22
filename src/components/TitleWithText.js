import '../styles/TitleWithText.scss'
import sticker1 from '../assets/sticker6.png'
import sticker2 from '../assets/sticker5-violet.png'


function TitleWithText(){
    return(
        <div className="title-with-text">
            <h1 className="title-with-text__title">Projets</h1>
            <p className="title-with-text__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Aenean eget porttitor quam. Nullam risus magna, 
                malesuada et consequat ac, pharetra quis dui. 
                Nunc augue ante, egestas ut nunc a, rutrum ultrices 
                quam. Sed eget quam eu neque hendrerit sodales molestie 
                id lorem. In sem metus, venenatis vel aliquet eget, 
                egestas sed est.
            </p>
            <img className="title-with-text__image sticker1" src={sticker1} alt="stars"></img>
            <img className="title-with-text__image sticker2" src={sticker2} alt="star"></img>
        </div>
    )
}

export default TitleWithText
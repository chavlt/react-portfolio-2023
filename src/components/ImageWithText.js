import '../styles/ImageWithText.scss'
import Title from './Title'
import Text from './Text'
import aboutImage from '../assets/about.png'


function ImageWithText({title, text}){
    return (
        <div className="image-with-text container">
            <div className="image-with-text__content">
                <Title title={title}/>
                <Text text={text}/>
            </div>
            <img className="image-with-text__image" src={aboutImage} alt="img"></img>
        </div>
    )
}

export default ImageWithText
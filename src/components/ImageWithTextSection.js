import '../styles/ImageWithTextSection.scss'
import Title from './Title'
import Text from './Text'
import aboutImage from '../assets/about-2.png'


function ImageWithText({title, text}){
    return (
        <div className={"image-with-text container "}>
            <div className="image-with-text__content">
                <Title>{title}</Title>
                <Text>{text}</Text>
            </div>
            <img className="image-with-text__image" src={aboutImage} alt="img"></img>
        </div>
    )
}

export default ImageWithText
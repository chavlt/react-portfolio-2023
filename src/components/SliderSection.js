import '../styles/SliderSection.scss'
import Title from './Title'
import Link from './Link'
import Slider from './Slider'
import { SliderContent } from '../datas/SliderContent'


let link = {
    "link": "#",
    "text": "voir tous les projets"
}



function SliderSection() {

    return (
        <div className="slider">
            <div className="slider__header container">
                <Title>derniers projets</Title>
                <Link link={link.link} text={link.text}></Link>

            </div>
            <div className="slider__content">
                <Slider data={SliderContent} />
            </div>
        </div>
    )
}

export default SliderSection
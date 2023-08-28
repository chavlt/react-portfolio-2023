import '../styles/SliderSection.scss'
import { register } from 'swiper/element/bundle';
import Title from './Title'
import Link from './Link'
import Slider from './Slider'
import { SliderContent } from '../datas/SliderContent'


register();

let link = {
    "link": "#",
    "text": "voir tous les projets"
}



function SliderSection() {
    return (
        <div className="slider">
            <div className="container">
                <div className="slider__header">
                    <Title>derniers projets</Title>
                    <Link link={link.link} text={link.text}></Link>

                </div>
                <Slider data={SliderContent} />
            </div>
        </div>
    )
}

export default SliderSection
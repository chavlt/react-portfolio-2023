import { register } from 'swiper/element/bundle';
import Title from './Title'
import Slider from './Slider'
import { SliderContent } from '../datas/SliderContent'

register();


function SliderSection() {
    return (
        <div className="slider container">
            <Title>derniers projets</Title>
            <Slider data={SliderContent} />
        </div>
    )
}

export default SliderSection
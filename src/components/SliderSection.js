import '../styles/SliderSection.scss'
import Title from './Title'
import Link from './Link'
import Slider from './Slider'
import { ProjectsInfos } from '../datas/ProjectsInfos'




function SliderSection() {

    return (
        <div className="slider">
            <div className="slider__header container">
                <Title>derniers projets</Title>
                <Link link="/projects" text="voir tous les projets"></Link>

            </div>
            <div className="slider__content">
                <Slider data={ProjectsInfos} />
            </div>
        </div>
    )
}

export default SliderSection
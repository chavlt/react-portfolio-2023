import Title from './Title'
import Link from './Link'
import Gallery from './Gallery'
import { GalleryContent } from '../datas/GalleryContent'
import '../styles/GallerySection.scss'

let link = {
    "link": "#",
    "text": "voir toute la galerie"
}


function GallerySection(){
    return(
        <div className="gallery container">
            <div className="gallery__header">
                <Title>galerie</Title>
                <Link link={link.link} text={link.text}></Link>
            </div>
            <Gallery data={GalleryContent}></Gallery>
        </div>

    )

}

export default GallerySection
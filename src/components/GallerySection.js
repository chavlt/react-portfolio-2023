import Title from './Title'
import Link from './Link'
import Gallery from './Gallery'
import { GalleryContent } from '../datas/GalleryContent'
import '../styles/GallerySection.scss'


function GallerySection(){
    return(
        <div className="gallery container">
            <div className="gallery__header">
                <Title>galerie</Title>
                <Link link="/gallery" text="voir toute la galerie"></Link>
            </div>
            <Gallery data={GalleryContent}></Gallery>
        </div>

    )

}

export default GallerySection
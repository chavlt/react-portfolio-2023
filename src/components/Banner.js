import '../styles/Banner.scss'
import grid from '../assets/banner-grid.svg'
import blob from '../assets/banner-blob.png'
import blobMobile from '../assets/banner-blob-mobile.png'
import noise from '../assets/banner-noise.png'
import stars from '../assets/icon-stars.svg'

function Banner(){
    return(
        <div className="banner">
            <img className="banner__img banner__img--blob mobile-hidden" src={ blob } alt="banner"></img>
            <img className="banner__img banner__img--blob desktop-hidden" src={ blobMobile } alt="banner"></img>
            <img className="banner__img banner__img--noise" src={ noise } alt="banner"></img>
            <img className="banner__img banner__img--grid" src={ grid } alt="banner"></img>

            <div className="banner__content">
                <div className="banner__tags">
                    <div className="banner__tag">développeuse front-end</div>
                    <div className="banner__tag">designer ui/ux</div>
                </div>
                <span className="banner__portfolio">portfolio</span>
                <span className="banner__year">2025</span>

                <img className="banner__sticker" src={ stars } alt="stars"></img>
            </div>
        </div>
    )
}

export default Banner
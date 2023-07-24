import '../styles/Banner.scss'
import bg from '../assets/bg.png'
import stickerDev from '../assets/stickerDev.png'
import star1 from '../assets/star1.png'
import star2 from '../assets/star2.png'
import sticker1 from '../assets/sticker1.png'

function Banner(){
    return(
        <div className="banner">
            <img className="banner__img" src={ bg } alt="desktop banner"></img>

            <div className="banner__content">
                <span className="banner__name">Charlène Villiette</span>
                <span className="banner__port">port</span>
                <span className="banner__folio">folio</span>
                <span className="banner__year">2023</span>

                <img className="banner__sticker sticker-dev" src={ stickerDev } alt="Développeuse front-end"></img>
                <img className="banner__sticker star-1" src={ star1 } alt="star"></img>
                <img className="banner__sticker star-2" src={ star2 } alt="star"></img>
                <img className="banner__sticker sticker-1" src={ sticker1 } alt="star"></img>
            </div>
        </div>
    )
}

export default Banner
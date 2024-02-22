import { MenuLinks } from '../datas/MenuLinks'
import { SocialMedia } from '../datas/SocialMedia'
import '../styles/Menu.scss'


function Menu({isOpen}){
    return (
        <div className={`menu ${isOpen ? 'active' : ''}`}>
            { MenuLinks.map(({title, src, sticker}, index) => (
                <a key={index} className='menu__link' href={src}>
                    {title}
                    <img className="sticker" src={sticker} alt=""></img>
                </a>
            ))}
            <div className="menu__social-medias-links">
                { SocialMedia.map(({social_media, src, img}, index) => (
                    <a key={index} className="menu__social-medias-link" href={src}><img src={img} alt={social_media}></img></a>
                    ))}
            </div>
        </div>

    )
}

export default Menu
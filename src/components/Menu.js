import { MenuLinks } from '../datas/MenuLinks'
import { SocialMedia } from '../datas/SocialMedia'
import '../styles/Menu.scss'


function Menu({isOpen, closeMenu}){
    return isOpen ? (
        <div className='menu'>
            <div className="menu__close" onClick={closeMenu}></div>
            { MenuLinks.map(({title, src}, index) => (
                <a key={index} className='menu__link' href={src}>{title}</a>
            ))}
            <div className="menu__social-medias-links">
                { SocialMedia.map(({social_media, src}, index) => (
                    <a key={index} className="menu__social-medias-link" href={src}>{social_media}</a>
                ))}
            </div>
        </div>

    ) : (
        null
    )
}

export default Menu
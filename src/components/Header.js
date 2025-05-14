import { useState } from 'react'
import { MenuLinks } from '../datas/MenuLinks'
import '../styles/Header.scss'
import Menu from './Menu'
import menuIcon from '../assets/icon-menu.svg'

function Header(){
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [textToggle, setTextToggle]  = useState(true)



    return (
        <header className="header">
            <span className='header__logo'>c</span>

            <div className="header__menu">
                { MenuLinks.map(({title, src}, index) => (
                    <a key={index} className='menu__link' href={src}>{title}</a>
                ))}
            </div>

            <div className={`header__menu-btn ${isOpenMenu ? 'opened' : ''}`} onClick={() => {setIsOpenMenu(!isOpenMenu); setTextToggle(!textToggle)}}>
                <img src={ menuIcon } alt="menu icon"></img>
                <div onClick={() => setIsOpenMenu(true)}  className="header__menu-title">
                    <p className={textToggle ? "visible" : ""}>Menu</p>
                    <p className={!textToggle ? "visible" : ""}>Fermer</p>
                </div>
            </div>

            <Menu isOpen={isOpenMenu} />
        </header>
    )
}


export default Header
import { useState } from 'react'
import { MenuLinks } from '../datas/MenuLinks'
import '../styles/Header.scss'
import Menu from './Menu'

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
                <svg className={`header__menu-icon-btn ${isOpenMenu ? 'active' : ''}`} width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.35355H12" stroke="#433A3A" stroke-linecap="round"/>
                    <path d="M1 5.35355H12" stroke="#433A3A" stroke-linecap="round"/>
                    <path d="M1 9.35355H12" stroke="#433A3A" stroke-linecap="round"/>
                </svg>

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
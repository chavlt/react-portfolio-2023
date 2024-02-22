import { useState } from 'react'
//import { MenuLinks } from '../datas/Menu'
import '../styles/Header.scss'
import Menu from './Menu'

function Header(){
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const [textToggle, setTextToggle]  = useState(true)



    return (
        <header className="header">
            <span className='header__logo'>c</span>

            <div className="header__button-menu" onClick={() => {setIsOpenMenu(!isOpenMenu); setTextToggle(!textToggle)}}>
                <div onClick={() => setIsOpenMenu(true)}  className="header__menu-title header__menu">{textToggle ? "menu" : "fermer"}</div>
                <div className="header__menu-bg-color header__menu">{textToggle ? "menu" : "fermer"}</div>
            </div>

            <Menu isOpen={isOpenMenu} />
        </header>
    )
}


export default Header
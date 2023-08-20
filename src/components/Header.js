import { useState } from 'react'
//import { MenuLinks } from '../datas/Menu'
import '../styles/Header.scss'
import Menu from './Menu'

function Header(){
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    return (
        <header className="header">
            <span className='header__logo'>c</span>

            <div className="header__button-menu" onClick={openMenu}>
                <div className="header__menu-title">menu</div>
                <div className="header__menu-bg-color"></div>
            </div>

            <Menu isOpen={isOpenMenu} closeMenu={() => setIsOpenMenu(false)} />
        </header>
    )

    function openMenu(){
        console.log("openmenu");
        setIsOpenMenu(true);
    }
}


export default Header
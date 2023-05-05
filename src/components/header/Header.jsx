import React, {useState} from "react";
import logo from '../assest/icons/logo.svg';
import hamburger from '../assest/icons/icon-hamburger.svg';
import close from '../assest/icons/icon-close.svg';
import { HeaderStyled, BodyStyled, NavbarStyled, BannerStyled} from "./StyleHeader";


const Header = () => {
    const [openMenu, setOpenMenu]= useState(false)
    const items= ['About','Careers','Events','Products','Support'];

    const onOpenMenu=()=>{
        setOpenMenu(!openMenu)
    }

    return (
        <HeaderStyled className="header">
            <NavbarStyled>
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" onClick={()=>onOpenMenu()}>
                    <img src={hamburger} alt="logo" />
                </button>
                <ul className={openMenu? 'navbar-nav show':'navbar-nav'}>
                    <div className={openMenu? 'navbar-close show':'navbar-close'}>
                        <img src={logo} alt="logo" />
                        <button type="button" onClick={()=>onOpenMenu()}>
                            <img src={close} alt="close" />
                        </button>
                    </div>
                    {
                        items.map(item=>(
                            <li className="navbar-nav-item ">
                                <a className="nav-link" href="#">{item}</a>
                                <hr/>
                            </li>
                        ))
                    }
                </ul>
            </NavbarStyled>
            <BannerStyled>
            <div  className="text-banner">
                <div>
                    IMMERSIVE EXPERIENCES THAT DELIVER
                </div>
            </div>
            </BannerStyled>
        </HeaderStyled>
    )
}

export default Header;
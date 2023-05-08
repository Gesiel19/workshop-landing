import React from "react"
import logo from "../../assest/icons/logo.svg"
import iconface from "../../assest/icons/icon-facebook.svg"
import icontwi from "../../assest/icons/icon-twitter.svg"
import iconpint from "../../assest/icons/icon-pinterest.svg"
import iconig from "../../assest/icons/icon-instagram.svg"
import {Footer} from "./Styledfooter"

const FooterBanner = () => {
    return (

        <Footer class="footer_media">

            <div>
                <div class="div_Left">
                    <img src={logo} alt="logo footer" />
                </div>
                <ul class="links_footer1">

                    <li><a href=""><link1>About</link1></a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Events</a></li>
                    <li><a href="">Products</a></li>
                    <li><a href="">Supports</a></li>

                </ul>

            </div>

            <div class="icons_socials">
                <ul>
                <li><a href=""><img src={iconface} alt="" /></a></li>
                <li> <a href=""><img src={icontwi} alt="" /></a></li>
                <li> <a href=""><img src={iconig} alt="" /></a></li>
                <li> <a href=""><img src={iconpint} alt="" /></a></li>
                    


                </ul>
                <div>
                    &copy; 2021 Loopstudios. All rights reserved.

                </div>

            </div>

        </Footer>

    )



}

export default FooterBanner
import React from 'react'
import logo from "../../assest/icons/logo.svg";
import back from "../../assest/desktop/image-hero.jpg";
import {StyleNav, link1} from "./StyleNavigation";


const NavigationBar = () => {
    const links = [
        {
            name: "About",
            route: ""
        },
        {
            name: "Careers",
            route: ""
        },
        {
            name: "Events",
            route: ""
        },
        {
            name: "Products",
            route: ""
        },
        {
            name: "Support",
            routes: ""
        }
    ]
  return (
    <StyleNav class="showcase">
      

      <figure>
        <img src={logo} alt="logo" />
      </figure>
     
      <ul>
        
        <a href=""><link1>About</link1></a>
        <a href="">Careers</a>
        <a href="">Events</a>
        <a href="">Products</a>
        <a href="">Supports</a>
        
      </ul>
      </StyleNav>
  );
}

export default NavigationBar
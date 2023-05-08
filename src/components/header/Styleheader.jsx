import styled from "styled-components";
import bg from '../assest/desktop/image-hero.jpg'
import bgmobile from '../assest/mobile/image-hero.jpg'

export const HeaderStyled= styled.header`
    background: url(${bg}) center no-repeat;
    height: 600px;
    padding: 30px 80px;
    font-family: 'Alata', sans-serif;
    color: white;
    width: 100%;
    @media  (max-width: 850px) {
        padding: 30px 30px;
    }
    @media (max-width: 850px){
        background: url(${bgmobile}) center no-repeat
    }
`;
export const NavbarStyled= styled.nav`
        display: flex;
        justify-content: flex-start;
        position: relative;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        div{
            display: none;
            transform: translateX(0);
         }
        a{
            display: flex;
            align-items: center;
        }
        button{
            display: none;
        }
        ul {
            display: flex;
            justify-content: end;
            gap: 40px;
            li {
                list-style: none;
                font-family: 'Josefin Sans', sans-serif;
                display: flex;
                flex-direction: column;
                gap: 10px;
                :hover hr{
                opacity: 1;
                }
            }
        }
        a{
            color: white;
            font-weight: 700;
            text-decoration:none;
        }
        
        hr{
            color: white;
            width: 20px;
            align-self: center;
            border: 0; 
            height: 0; 
            box-shadow: 0 1px 1px 1px rgb(255, 255, 255);
            cursor: pointer;
            opacity: 0;
        }
        /* .bars__menu{
            width: 40px;
        height: 20px;
        background-color: rgb(254, 255, 255);
        position: absolute;
        top: 40px;
        left: 200px;
        cursor: pointer;
        transition: all 600ms;
        opacity: 0;

        span {
            display: block;
            width: 100%;
            height: 2px;
            background-color: black;
            margin-top: 6px;
            transform-origin: 0px 100%;
        }

        } */

        @media  (max-width: 850px) {
        .navbar{
            .navbar-close{
                transform: translateX(0);
                cursor: pointer;
                flex-direction: column-reverse;
                align-items: center;
            }
            .navbar-close{
                display: flex;
                gap: 2.5rem;
                padding-top: 2rem;
            }
            &-toggler{
                display: block;
                background: none;
                border: 0;
            }
            &-nav{
                right: -30px;
                left: -30px;
                position: absolute;
                flex-direction: column;
                background: black;
                top: -30px;
                justify-content: center;
                z-index: 2;
                height: 100vh;
                transform: translateX(-100%);
                &.show{
                    transform: translateX(0);
                }
            }
            &-close{
                &.show{
                    display: flex;
                    top: 0;
                    position: absolute;
                    right: 0;
                    width: 100%;
                    justify-content: space-between;
                    padding: 30px;
                    color:white;
                }
            }
        }
        .navbar{
            &-nav {
                padding-top: 150px;
                
                &-item {
                    margin-left: 20px;
                    list-style: none;
                    text-transform: uppercase;
                    display: inline-block ;
                    hr{
                        display: flex;
                        align-self: center;
                        margin-left: 10%;
                        margin-top: 10px;
                    }
                }
            }
            a{
                font-weight: 300;
                text-decoration:none;
                font-size: 32px;
                font-family: 'Josefin Sans' 'Alata';
                margin-left: 8px;
            }
        }

        
    }
`;
export const BannerStyled= styled.div`
        color: white;
        display: flex;
        align-items: center;
        height: 500px;
        font-size: 45px;
        font-weight: 300;
        position: relative;
        width: 690px;
        div{
            border: 1px solid white;
            text-align: left;
            display: flex;
            align-content: center;
            font-size: 70px;
            font-family: 'Josefin Sans' 'Alata';
            font-weight: 300;
            padding: 40px;
        }
        @media  (max-width: 850px) {
         .text-banner{
                width: 100%;
                div{
                    font-size: 40px;
                    padding: 20px;
                    padding: 20px;
                    min-height: 0;
                }
           }
    } 
`;
export const BodyStyled= styled.main`
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
`;

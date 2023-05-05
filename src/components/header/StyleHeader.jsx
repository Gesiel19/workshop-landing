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
    @media (max-width: 600px){
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
            @media  (max-width: 850px) {
            padding-top: 150px;
            }
         }
        a{
            display: flex;
            align-items: center;
        }
        button{
            display: none;
            @media  (max-width: 850px){
                display: block;
                background: none;
                border: 0;
            }
        }
        ul {
            display: flex;
            justify-content: end;
            gap: 40px;
            @media  (max-width: 850px){
                div{
                transform: translateX(0);
                display: flex;
                top: 0;
                position: absolute;
                right: 0;
                width: 100%;
                justify-content: space-between;
                padding: 30px;
                    button{
                        background: none;
                        border: none;
                        cursor: pointer;
                    }
                }
            }
            li {
                list-style: none;
                font-family: 'Josefin Sans', sans-serif;
                display: flex;
                flex-direction: column;
                gap: 10px;
                :hover hr{
                opacity: 1;
                }
                @media  (max-width: 850px){
                    margin-left: 20px;
                    list-style: none;
                    text-transform: uppercase;
                    display: inline-block ;
                }
            }
            @media  (max-width: 850px){
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
            }
        }
        a{
            color: white;
            font-weight: 700;
            text-decoration:none;
            @media  (max-width: 850px){
                font-weight: 300;
                text-decoration:none;
                font-size: 32px;
                font-family: 'Josefin Sans', sans-serif;
                margin-left: 8px;
            }
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
            @media  (max-width: 850px){
                display: flex;
                align-self: center;
                margin-left: 10%;
                margin-top: 10px;
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
        @media  (max-width: 850px) {
            width: 100%;
        }
        div{
            border: 4px solid white;
            text-align: left;
            display: flex;
            align-content: center;
            font-size: 70px;
            min-height: 280px;
            padding-left: 35px;
            padding-top: 40px;
            font-family: 'Josefin Sans', sans-serif;
            font-weight: 300;
            @media  (max-width: 850px) {
                font-size: 40px;
                padding: 20px;
                padding: 20px;
                min-height: 0;
                }
            
        }
`;


export const BodyStyled= styled.main`
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
`;

/*
@media  (max-width: 850px) {
   
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
                    button{
                        background: none;
                        border: none;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .header{
        
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
                font-family: 'Josefin Sans', sans-serif;
                margin-left: 8px;
            }
        }
    }
}*/
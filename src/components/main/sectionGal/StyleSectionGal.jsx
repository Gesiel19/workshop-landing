import styled from "styled-components";

export const StyleSection = styled.section `
img{
    width: 400px;
    margin-left: 230px;
}

.card{
    font-family: "Josefin Sans", "sans-serif";
    font-weight: 200;
    font-size: 15px;
    width: 400px;
    margin: auto;
    position: absolute;
    background-color: white;
    top: 100px;
    left: 630px;
    padding: 30px;
}

@media screen and (max-width: 375px){

    display: flex;
    align-items: center;
    flex-direction: column;
    .card{
        display: flex;
        justify-content: center;
        flex-direction: column;
        position: static;
        width: 310px;
        align-self: center;

        h2{
          align-self: center;
          text-align: center;
        }
        .text{
            text-align: justify;
            width: 270px;
        }
    }

    img{
        margin: 0;
        width: 310px;
       
    }
}

`
import styled from "styled-components";

export const StyleGallery = styled.section`

display: flex;
justify-content: center;
flex-wrap: wrap;
margin-top: 100px;
font-family: "Josefin Sans", "sans-serif";

.galleryHeader{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;

    button{
        font-family: "Josefin Sans", "sans-serif";
        font-weight: 600;
        color: black;
        font-size: 15px;
        width: 110px;
        height: 30px;
        background-color: white;
        border: 1px solid gray;

        :hover{
            background-color: black;
            color: white;
        }
    }
    margin-bottom: 30px;
}

.gallery{
    display: grid;

    grid-template-areas: 
    "figure figure figure figure"
    "figure figure figure figure";

    width: 800px;
    gap: 5px;




    figure{
        margin: 0;
        position: relative;

        img{
        width: 200px;
        margin: 0;
        
    }

        h3{
        position: absolute;
        color: white;
        top: 270px;
        left: 30px;
        }
    }
}

@media screen and (max-width: 375px){
    margin-top: 30px;

    .galleryHeader{
        h2{
            justify-content: center;
            
        }

        button{
            position: absolute;
            top: 2480px;
            z-index: 100;
        }


    }

    .gallery{
        display: flex;
        flex-direction: column;
        width: 300px;

        figure{
      
            width: 300px;
        img{
            width: 300px;
            height: 150px;
            object-fit: cover;
            object-position: 0px 0px;
        }

        h3{
            top: 80px;
        }
        }

    }
}
`
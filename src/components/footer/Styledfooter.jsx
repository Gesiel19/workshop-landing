import styled from "styled-components";

export const Footer = styled.footer`
    
   background-color: black;
   list-style: none;
   color: white;
   padding: 20px 60px 50px 60px;
   text-align: center;
   display: flex;
   justify-content: space-between;
   //margin-top: 600px;

   
   .links_footer1{
        display: flex;
        margin-left:30px;
        
        li{
        margin-bottom:15px;    
        }
       
        
      
}

.icons_socials ul{
    display: flex;
    align-items: center;
    justify-content: center;
   }

   li{
    list-style: none;
    margin-bottom: 10px;
    margin-right: 30px;
  
    
    a{
        color: white;
        text-decoration: none;
        
    }

   }

   @media  (max-width: 850px) {
        
    background-color: black;
   list-style: none;
   color: white;
   padding: 20px 60px 50px 60px;
   text-align: center;
   display: flex;
   flex-direction:column;
   justify-content: space-between;
   //margin-top: 600px;

    .links_footer1{
        display: flex;
        flex-direction:column;
        margin-bottom: 20px;
        margin-top:15px;
       
        ul{
            margin-bottom:30px;
        }
        
      
}

.icons_socials ul{
    display: flex;
   
    align-items: center;
    justify-content: center;
   }

   li{
    list-style: none;
  
    margin-bottom: 10px;
    margin-right: 20px;
    
    a{
        color: white;
        text-decoration: none;
        
    }
    
 }
}
`;

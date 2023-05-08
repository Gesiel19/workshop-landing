import React from 'react';
import GlobalStyles from './StyleApp';
import Header from '../header/Header';
import Main from "../main/Main";
import Footer from "./../footer/Footer";


const App = () => {
  return (
    <>
    <GlobalStyles/>
       <Header/>
       <Main/>
      <Footer/> 
    </>
  );
};

export default App;
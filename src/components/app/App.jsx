import React from 'react';
import Main from "../main/Main";
import GlobalStyles from './StyleApp';
import Header from '../header/Header';


const App = () => {
  return (
    <>
    <GlobalStyles/>
       <Header/>
       <Main/>
    </>
  );
};

export default App;
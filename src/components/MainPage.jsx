import React from "react";
import Header from "./Header/Header";
import FooterContainer from "./Footer/FooterContainer"
import MainContainer from "./Main/MainContainer";


const MainPage = () => {
   return(
   <div className="container">
        <Header />
        <MainContainer />
        <FooterContainer />
   </div>)
}

export default MainPage
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer"
import MainContainer from "./Main/MainContainer";


const MainPage = () => {
   return(
   <div className="container">
        <Header />
        <MainContainer />
        <Footer />
   </div>)
}

export default MainPage
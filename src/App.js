import React from 'react';
import './App.css';
import './normalize.css'
import MainPage from './components/Pages/MainPage/MainPage';
import { Route, Routes } from 'react-router-dom';
import DetailCardContainer from './components/Pages/DetailPage/DetailPageContainer';


const App = () => {

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/Irlix-pub' element= {<MainPage />} />
        <Route path='/Irlix-pub/:id' element = {<DetailCardContainer />} />
        <Route path='*' element = {<div>Ошибка</div> } />
      </Routes>
    </div>
  );
}

export default App;

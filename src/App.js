import React from 'react';
import './App.css';
import './normalize.css'
import MainPage from './components/MainPage';
import { Route, Routes } from 'react-router-dom';
import DetailCardConatiner from './components/DetailPageContainer';


const App = () => {

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/Irlix-pub-intensive' element= {<MainPage />} />
        <Route path='/Irlix-pub-intensive/:id' element = {<DetailCardConatiner />} />
        <Route path='*' element = {<div>Ошибка</div> } />
      </Routes>
    </div>
  );
}

export default App;

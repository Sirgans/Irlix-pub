import React from 'react';
import './App.css';
import './normalize.css'
import MainPage from './components/MainPage';
import { Route, Routes } from 'react-router-dom';
import DetailCard from './components/DetailPage';



const App = () => {

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/Irlix-pub-intensive' element= {<MainPage />} />
        <Route path='/Irlix-pub-intensive/:id' element = {<DetailCard />} />
      </Routes>
    </div>
  );
}

export default App;

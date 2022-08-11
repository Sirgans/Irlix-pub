import React, {useState} from 'react';
import './App.css';
import './normalize.css'
import MainPage from './components/MainPage';
import { Route, Routes } from 'react-router-dom';
import DetailCard from './components/DetailPage';


export const Catigory = React.createContext()
// export const selectCatigory = React.createContext()

const App = () => {
<<<<<<< HEAD

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/Irlix-pub-intensive' element= {<MainPage />} />
        <Route path='/Irlix-pub-intensive/:id' element = {<DetailCard />} />
      </Routes>
=======
  const [context, setContext] = useState([])
  const [selectCatigory, setSelectCatigory] = useState('Всё')
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
      <Catigory.Provider value = {{context, setContext, selectCatigory, setSelectCatigory, searchValue, setSearchValue}}>
      <Header />
      <Main />
      <Footer />
      </Catigory.Provider>
>>>>>>> bf27c4393cbe0f60563b70ceef881d0a1225689b
    </div>
  );
}

export default App;

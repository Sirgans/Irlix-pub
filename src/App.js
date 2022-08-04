import React, {useState} from 'react';
import './App.css';
import './normalize.css'
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

export const Catigory = React.createContext()
// export const selectCatigory = React.createContext()

const App = () => {
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
    </div>
  );
}

export default App;

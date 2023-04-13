import './App.css';
import Nav from './components/Nav'; 
import Cards from './components/Cards.jsx';
import { useState } from 'react';
import axios from 'axios';
import {Routes,Route} from 'react-router-dom'  // npm i react-router-dom
import About from './components/About';
import Detail from './components/Detail';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = 'ff50319b6c37.e38dfb40ffcaf57ab4aa'

function App() {

   let [characters, setCharacters] = useState([])

   const onSearch= (id) => {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)          //(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then(( data ) => {        // axios me da un objeto gigante, hacemos destructuring y la response esta en data. o hacemos un then mas y no lo ponemos entre llaves
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      console.log('asd')
      const charsFiltered = characters.filter(character => character.id !== id)
      setCharacters(charsFiltered)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <hr></hr>
         <Routes>
            <Route path= {'/home'} element={<Cards onClose={onClose} characters={characters}/>} /> 
            <Route path= {'/about'} element={<About/>}/>
            <Route path= {`/detail/:id`} element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;

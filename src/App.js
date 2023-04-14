import './App.css';
import Nav from './components/Nav'; 
import Cards from './components/Cards.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useNavigate } from 'react-router-dom'  // npm i react-router-dom
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = 'ff50319b6c37.e38dfb40ffcaf57ab4aa'

function App() {

   const navigate = useNavigate()
   const [access,setAccess] = useState({
      state:false,
      EMAIL:'vecchiofj@gmail.com',
      PASSWORD:'asdasd123'
   })

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function login(userData){
      
      if(userData.password === access.PASSWORD && userData.email === access.EMAIL){ 
         setAccess({
            ...access,
            state:true
         });
         navigate('/home');
      }else {
         alert('Ingresa tu email o password son incorrectos')
      }
    }


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
            <Route path= '/' element={<Form login={login} access={access}/>}/>
            <Route path= '/home' element={<Cards onClose={onClose} characters={characters}/>} /> 
            <Route path= '/about' element={<About/>}/>
            <Route path= '/detail/:id' element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;

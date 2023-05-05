import React, { useState} from 'react';
import { connect, useDispatch } from 'react-redux';
import Card from './Card';
import { filterCards, orderCards } from '../redux/actions';

const Favorites = ({myFavorites}) => {
    const [aux, setAux] = useState(false)
    const dispatch = useDispatch();

    const handleOrder = (event) => {
        setAux(!aux)
        dispatch(orderCards(event.target.value))
    }
    
    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value))
    }


    return (
        <div>
            <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            </select>

           {
           myFavorites.map( ({id,name,status,species,gender,origin,image}) =>{
              return(
                 <Card
                    key={id}
                    id={id}
                    status={status}
                    name={name}
                    species={species}
                    gender={gender}
                    origin={origin.name}
                    image={image}
                 />
              )
           })
           }
        </div>
    )
  
}

const mapStateToProps = (state)=>{  // Traigo del estado global el estado de si está en Favoritos
    return{
       myFavorites: state.myFavorites
    }
 }
 
    
 export default connect(
    mapStateToProps,
    null
 )(Favorites); // A que componente se esta conectando

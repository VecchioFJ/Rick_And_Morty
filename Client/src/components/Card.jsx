import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../redux/actions";
import { connect } from 'react-redux';


const Card = ({id,name,status,species,gender,origin,image,onClose,removeFav,addFav,myFavorites}) => {  
   
   const location = useLocation()      // Uso la ruta para no renderizar el boton 'x'


   const [isFav,setIsFav] = useState(false);  // Estado Local

   const handleFavorite = () => {
      if (isFav){
         setIsFav(false);
         removeFav(id)
      }
      else{
         setIsFav(true);
         addFav({id,name,status,species,gender,origin,image,onClose,removeFav,addFav})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div>

         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>

         {location.pathname !== `/favorites` ?(
            <button onClick={() => onClose(id)}>X</button>
         ):null}

         <h2><Link to={`/detail/${id}`} > {name} </Link></h2>

         <h4>{status}</h4>
         <h4>{species}</h4>
         <h4>{gender}</h4>
         <h4>{origin}</h4>
         <img width='200px' src={image} alt='Imagen del personaje'/>

      </div>
   );
}

const mapDispatchToProps = (dispatch)=>{  //Despacho Acciones
   return{
      addFav: (character)=>{dispatch(addFav(character))},
      removeFav: (id)=>{dispatch(removeFav(id))}
   }
}

const mapStateToProps = (state)=>{  // Traigo del estado global el estado de si está en Favoritos
   return{
      myFavorites: state.myFavorites
   }
}

   
export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card); // A que componente se esta conectando
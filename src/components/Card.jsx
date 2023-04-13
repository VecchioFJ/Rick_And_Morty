import React from "react";
import { Link } from "react-router-dom";

// const Card = (props) => {    // y con las propiedades con el pros.  por ej props.name  props.status

const Card = ({id,name,status,species,gender,origin,image,onClose}) => {   

   return (
      <div>
         <button onClick={() => onClose(id)}>X</button>

         <h2><Link to={`/detail/${id}`} > {name} </Link></h2>

         <h4>{status}</h4>
         <h4>{species}</h4>
         <h4>{gender}</h4>
         <h4>{origin}</h4>
         <img width='200px' src={image} alt='Imagen del personaje' />
      </div>
   );
}

export default Card
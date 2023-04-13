import React from "react";
import Card from './Card';


const Cards = ({characters, onClose}) => {
   return (
      <div>
         {
         characters.map( ({id,name,status,species,gender,origin,image}) =>{
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
                  onClose={onClose}
               />
            )
         })
         }
      </div>
   )
}

export default Cards
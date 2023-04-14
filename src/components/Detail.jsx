import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character'
const API_KEY = 'ff50319b6c37.e38dfb40ffcaf57ab4aa'

const Detail = () => {

    let {id} = useParams()
    let [character,setCharacter] = useState({})
    let [loading,setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        axios(`${URL_BASE}/${id}?key=${API_KEY}`) 
        .then(response => response.data)
        .then(( data ) => {  
           if (data.name) {
              setCharacter(data)
              setLoading(false)
           } else {
              alert('No hay personajes con ese ID')
              setLoading(false)
           }
        });
        return setCharacter({});
     }, [id]);
    
    return(
        <div>
            {
            loading? (                  // tb se podia hacer un ternario character ? (<h2> Algo <h2>) : 
            <div> Cargandinggg </div>
            ) : (
            <div>
                <h1>{character.name} </h1>    {/* O puedo hacer un conditional chaining en cada variable=> {character?.name} */}
                <h3>{`STATUS | ${character.status}`}</h3>    {/* O sino => {character && character.name} */}
                <h3>{`GENDER | ${character.species}`}</h3>
                <h3>{`SPECIE | ${character.gender}`}</h3>
                <h3>{`ORIGIN | ${character.origin.name}`}</h3>
                <img width= '400px' src={character.image} alt={`Imagen de ${character.name}`} />
            </div>
            )
            }
        </div>    
    )
}

export default Detail
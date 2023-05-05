import {useState} from "react";

const SearchBar = ({onSearch})=> {   // tb puedo usar props y en la variable props.onSearch
   
   const [id, setId] = useState('')

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
         <input type='search' value={id} onChange={handleChange} placeholder="Ingrese id del personaje..." />
         <button onClick= {() => {onSearch(id); setId('')}}>Agregarr</button>  {/*//cuando necesito pasar un argumento a una funcion tengo q hacerlo con un cb, sino se va a ejecutar la funcion*/}
      </div>
   );
}

export default SearchBar
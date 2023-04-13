//import React from "react"; para crear una plantilla del componente atajo: rafce
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return(
        <div>
            <SearchBar onSearch={props.onSearch}/>
            <button> <Link to={'/about'} > About </Link> </button>
            <button> <Link to={'/home'}> Home </Link></button>
        </div>
    )
}

export default Nav


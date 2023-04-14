//import React from "react"; para crear una plantilla del componente atajo: rafce
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import {useLocation} from 'react-router-dom';

const Nav = (props) => {

    const location = useLocation()

    return (
        
        <>
        {location.pathname !== `/` ?(
            
            <nav>
                <SearchBar onSearch={props.onSearch}/>
                <button> <Link to='/about' > About </Link> </button>
                <button> <Link to='/home'> Home </Link></button>
            </nav>

        ):null}
        </>
    )
}

export default Nav


import {ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [], // Este es el array que voy pisando 
    allCharactersFav: [] // Este lo uso de base para modificarlo
}

const reducer = (state = initialState, {type,payload}) => {
    switch(type) {
        

        default:
            return{...state}        
    }
    
}

export default reducer;
import {ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites: [], // Este es el array que voy pisando 
    allCharactersFav: [], // Este lo uso de base para modificarlo
}

const reducer = (state = initialState, {type, payload}) => {
    switch(type) {

        case ADD_FAV: 
            return {
                ...state,
                myFavorites: payload,
                allCharactersFav: payload
            }

        case REMOVE_FAV: 
            return{
                ...state,
                myFavorites: payload,
                allCharactersFav: payload
            }    

        case FILTER: 
            const copyAllCharactersFiltered = state.allCharactersFav?.filter(fav => fav.gender === payload)        
            return {
                ...state,
                myFavorites: copyAllCharactersFiltered,
            }

        case ORDER: 
            // const copyAllCharactersOrdered = state.allCharactersFav
            return {
                ...state,
                myFavorites: state.allCharactersFav?.sort((a,b) => (
                    payload === 'A' ? b.id-a.id : a.id-b.id)),
            }

       

        default:
            return{...state}        
    }
    
}

export default reducer;
let myFavorites = [];

const postFav = (req, res) => {
    try {
        const character = req.body
        const characterFound = myFavorites.find (fav => fav.id === character.id)
    
        if (characterFound) throw Error('Ya existe ese personaje en tus favoritos')
        
        myFavorites.push(character)            
        return res.status(200).json(myFavorites)
        
    } catch (error) {
        return res.status(404).send(error.message)
    }
}

const deleteFav = (req, res) => {
    const { id } = req.params;

    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id);  // parseo el id a number con el +
    
    return res.status(200).json(myFavorites)
}


module.exports = {
    postFav,
    deleteFav
}
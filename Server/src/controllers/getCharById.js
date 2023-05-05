const URL = `https://rickandmortyapi.com/api/character`
const axios = require ('axios')

const getCharById = async (req, res) => {
    
    try {
        const { id } = req.params;

        const { data } = await axios (`${URL}/${id}`)

        if(!data.name)throw new Error (`Faltan datos del personaje con ID: ${id}`);

        let character = {       
            id: data.id,
            name: data.name,
            species: data.species,
            origin: data.origin,
            gender: data.gender,
            image: data.image,
            status: data.status
        }

        return res.status(200).json(character)
            
        //return res.status(404).send('Not found')
    
        
        
    } catch (error) { 
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)
    }
}

module.exports = {
    getCharById
}


// Archivo para funcionamiento con http

// const axios = require ('axios') 

// const getCharById = (res, id) => {
//     axios
//         .get(`https://rickandmortyapi.com/api/character/${id}`) 
//         .then(response => response.data)        // el .data es donde esta la info de la respuesta EN AXIOS
//         .then(data => {                 // puedo aplicar destructuring (ver abajo)
//             let character = {       
//                 id: id,
//                 name: data.name,
//                 gender: data.gender,
//                 origin: data.origin,
//                 image : data.image,
//                 status : data.status
//             } 
//             return res
//                 .writeHead(200, {'Content-type': 'application/json'})  // el segundo parametro indica el tipo de dato q estoy mandando
//                 .end(JSON.stringify(character))
//         })
//         .catch(error => {
//             return res
//                 .writeHead(500, {'Content-type': 'text/plain'})  //
//                 .end(error.message)
//         })
// }

// module.exports = {
//     getCharById
// }



/*
.then(({name, gender, origin, image, status}) => {
    let character = {  
        id: id,
        name,
        gender,
        origin,
        image,
        status
    }
})
*/
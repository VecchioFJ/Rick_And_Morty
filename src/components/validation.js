const validation = (userData) => {

    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    let errors = {};
        
    if (!regexEmail.test(userData.email)){
      errors.email = 'Ingrese un email válido'
    }else if(userData.email.length > 35){
        errors.email = 'Debe contener menos de 35 caracteres'
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'Su password debe contener entre 6 y 10 caracteres'
    }else if(!userData.password.match(/\d/)){
        errors.password = 'Ingrese al menos un numero';
    }        

    return errors

}

export default validation;

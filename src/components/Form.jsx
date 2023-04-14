import React, {useState} from 'react'
import validation from './validation';


const Form = ({login}) => {

const [userData,setForm]= useState({
        email:'',
        password:''
});

const [errors ,setErrors]= useState({
    email:'',
    password:''
});

const handleOnChange = (event) => {
    setForm({
        ...userData,
        [event.target.name] : event.target.value
    })

    setErrors(
        validation({
         ...userData,
        [event.target.name] : event.target.value
    }))
}

const handleOnSubmit = (event)=>{
    event.preventDefault();
    login(userData);
}


  return (
    <div>
    <form onSubmit ={handleOnSubmit}>
        <label htmlFor="email">EMAIL</label>
        <input type="email" placeholder='Tu email...' name='email' value={userData.email} onChange={handleOnChange}></input>
        {errors.email && <p>{errors.email}</p>}

        <label htmlFor='password'>PASSWORD</label>
        <input type="password" placeholder='Tu password...' name='password' value={userData.password} onChange={handleOnChange}></input>
        {errors.password && <p>{errors.password}</p>}

        <button>Submit</button>
    </form>
    </div>
  )
}

export default Form
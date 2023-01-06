import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import api from '../api/ApiData';

const SignUp = () => {

  const { UserData , loading , handleSignup , User , setUser } = useContext(DataContext);

  // if(!loading)
  // {
  //     console.log(UserData)
  // }

  const inputHandler = async (event) =>{
    const { name , value } = event.target;

    const id = UserData ? UserData[UserData.length -1].id + 1 : 1;

    setUser({
      ...User,
      id : id,
      [name] : value
    })

  }


  return (
    <>
      <h2>Signup</h2>
      <form>
        <label htmlFor='username'>Name</label>
        <input
          type='text'
          placeholder="Username"
          id="name"
          name='name'
          required
          value={User.name}
          onChange={inputHandler}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder="abc@xyz.com"
          id="email"
          name='email'
          required
          value={User.email}
          onChange={inputHandler}
        />
        <label htmlFor='phone'>Phone</label>
        <input
          type='text'
          placeholder="......"
          id="phone"
          name='phone'
          required
          value={User.phone}
          onChange={inputHandler}
        />
        
        
      </form>

      <button type='button' onClick={() => handleSignup()}>Signup</button>

      <p>Already User ?
        <Link to="/login">Login</Link>
      </p>
          
          
      <Link to="/users">
          UserList
      </Link>
    </>
  )
}

export default SignUp
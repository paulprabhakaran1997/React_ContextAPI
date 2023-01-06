import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import api from '../api/ApiData';
import { useNavigate } from 'react-router-dom';

const EditUser = () => {

  const { id } = useParams();

  const history = useNavigate()

  const { UserData , loading  } = useContext(DataContext);

  const [editUser , setEditUser] = useState({
    name : "",
    phone : "",
    email : ""
  })

  

  const thisUserData = UserData.find((data) => (data.id).toString() === id)
  // console.log(thisUserData)

  console.log(id)

  useEffect(() =>{
    
    if(thisUserData)
    {
      console.log(thisUserData)
      setEditUser({
        id : thisUserData.id,
        name : thisUserData.name,
        email : thisUserData.email,
        phone : thisUserData.phone
      })
    }
  },[UserData , setEditUser])


  const inputHandler = async (event) =>{
    const { name , value } = event.target;

    setEditUser((prevItem) => {
      return {
        ...prevItem ,
        [name] : value
      }
    })

  }


  const handleEditUser = async (e) =>{
    // e.preventDefault()
    console.log(editUser)

    try{
      const response = await api.put(`/user/${id}`,editUser)
      console.log(response)
      history("/users")
    }
    catch(err){
      console.log(err.message)
    }

  }

  return (
    <>
      <h2>UserInfo</h2>
      <form>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          placeholder="name"
          id="name"
          name='name'
          required
          value={editUser.name}
          onChange = {inputHandler}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder="abc@xyz.com"
          id="email"
          name='email'
          required
          value={editUser.email}
          onChange = {inputHandler}
        />
        <label htmlFor='phone'>Phone</label>
        <input
          type='text'
          placeholder="......"
          id="phone"
          name='phone'
          required
          value={editUser.phone}
          onChange = {inputHandler}
        />
      </form>
      <button type='button' onClick={() => handleEditUser()}>Save Changes</button>
      <Link to="/users">UserList</Link>
    </>
  )
}

export default EditUser
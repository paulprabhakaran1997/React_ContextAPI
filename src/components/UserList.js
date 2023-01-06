import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';

const UserList = () => {

    const { UserData , loading , handleDelete } = useContext(DataContext)

    // if(!loading)
    // {
    //     console.log(UserData)
    // }

    return (
        <>
            <h2>UserList</h2>
            <div className='tableSection' style={{ textAlign: '-webkit-center' }}>
                <table>
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Phone</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {UserData && UserData.map((data) => (
                            <tr key={data.id}>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>
                                    <Link to={`/users/${data.id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <button onClick={() => handleDelete(data.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Link to="/signup">Signup</Link>
            
        </>
    )
}

export default UserList
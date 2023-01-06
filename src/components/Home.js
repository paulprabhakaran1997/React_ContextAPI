import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {

    const history = useNavigate();

    const demo = useRef(true)

    useEffect(() =>{
        if(demo.current) {
            console.log(demo.current);
            console.log("Test");
            demo.current = false
        }
    },[])

    return (
        <>
            <h1>Home</h1>
            <Link to="/signup">
                Signup
            </Link>
        </>
    )
}

export default Home
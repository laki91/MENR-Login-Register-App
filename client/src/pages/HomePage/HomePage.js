import React, { useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { getUserData } from '../../service/auth-service';
import './HomePage.css'

export default function HomePage({users, setUsers}) {

    const navigate = useNavigate()


    useEffect(()=> {
        if(getUserData() === null){
            navigate('/')
        }
        if(users){
            setUsers(getUserData())
        }
    },[])

    return (
        <>
        <nav className="navbar navbar-expand-lg">
            <ul className='navbar-nav navbar-brand ms-auto'>
                <NavLink to='/' className='nav-link'>Home</NavLink>
                <NavLink to='/' className='nav-link'>My Profile</NavLink>
                <NavLink to='/' className='nav-link'>LogOut</NavLink>
            </ul>
        </nav> 

        <div className="container">
            <h1>{users.firstName}</h1>
        </div>
        </>
    )
}

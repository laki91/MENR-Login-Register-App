import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import PostsList from '../../components/PostsList/PostsList';
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
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <ul className='navbar-nav navbar-brand ms-auto'>
                <NavLink to='/profile' className='nav-link'>My Profile</NavLink>
            </ul>
        </nav> 
 
        <div className="container">
            <h3 className='display-4 mb-3'>Welcome to Premier League blog </h3>
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="row">
                        <PostsList users={users} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

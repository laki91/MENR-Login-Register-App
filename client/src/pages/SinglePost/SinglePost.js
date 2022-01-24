import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

export default function SinglePost() {

    const { id } = useParams()
    const navigate = useNavigate()

    const [onePost, setOnePost] = useState({})

    useEffect(() => {
        axios.get('http://localhost:5000/postsData')
        .then(res => {
            setOnePost(res.data.filter(post => post._id === id)[0]) 
        })
    }, [])

    //console.log(onePost);

    return ( 

        <>
            <nav className="navbar navbar-expand-lg  navbar-light bg-light mb-4 ">
                <ul className='navbar-nav navbar-brand ms-auto'>
                    <NavLink to='/home' className='nav-link'>Home</NavLink>
                    <NavLink to='/profile' className='nav-link'>My Profile</NavLink>
                </ul>
            </nav>
            <div className="container">
                <div className="col-10 offset-1">
                    <div className="row">
                        <div className="col-6 line">
                            <h3 className='m-4 display-5'>{onePost.title}</h3>
                            <p className='lead me-4 mt-5'>{onePost.text}</p>
                        </div>
                        <div className="col-6 ">
                            <h3 className='m-4 display-5'>Post info</h3>
                            <p className='m-4 lead mt-5 '>Creator: <b><em>{onePost.firstName} {onePost.lastName}</em></b></p>
                            <p className='m-4 lead '>Date: <b><em>{onePost.date}</em></b></p>
                            <p className='m-4 lead '>Role: <b><em>{onePost.role}</em></b></p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { addPost, getUserData, logOutApp } from '../../service/auth-service';
import './Profile.css'

export default function Profile({ users, setUsers }) {

    const [newPost, setNewPost] = useState({
        title:'',
        text:'',
        date: new Date().toLocaleDateString(),
        firstName: users.firstName,
        lastName: users.lastName,
        id: users._id,
        role: users.role
    })

    const navigate = useNavigate()

    useEffect(() => {
        if (getUserData() === null) {
            navigate('/')
        }
        if (users) {
            setUsers(getUserData())
        }
    }, [])

    const onLogout = () => {
        logOutApp()
        setUsers({})
        navigate('/')
    }

    const onCreate = (e) => {
        e.preventDefault()
        addPost(newPost)
        navigate('/home')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-light bg-light ">
                <ul className='navbar-nav navbar-brand ms-auto'>
                    <NavLink to='/home' className='nav-link'>Home</NavLink>
                    <NavLink to='/' onClick={onLogout} className='nav-link'>Logout</NavLink>
                </ul>
            </nav>

            <div className="container">
                <div className="row">
                    <div className="col-6">
                    <h3 className='m-4 display-6'> <b> <em >General info</em></b> </h3>
                        <p className='m-4 mt-5 lead '>First Name: <b>{users.firstName}</b></p>
                        <p className='m-4 lead '>Last Name: <b>{users.lastName}</b></p>
                        <p className='m-4 lead '>Email: <b>{users.email}</b></p>
                        <p className='m-4 lead '>Role: <b>{users.role}</b></p>
                    </div>
                    <div className="col-6">
                    <h3 className='m-4 text-center display-6' >Create Your Post</h3>
                    <form onSubmit={onCreate} className='form_container '>
                        <input type="text" 
                        placeholder='Add title'
                        className='input mt-4' 
                        onChange={e => setNewPost({...newPost, title: e.target.value})}
                        required
                        />
                        <textarea 
                        placeholder='Add some text'
                        className='input mt-4' cols="30" rows="7" 
                        onChange={e => setNewPost({...newPost, text: e.target.value})}
                        required
                        />
                        <button className='profileBtn mt-4'>Add Post</button>
                    </form>
                    </div>
                </div>                    
                </div>
        </>

    )
}
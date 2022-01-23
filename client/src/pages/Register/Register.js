import React,  { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { registerMethod } from '../../service/auth-service';


import './Register.css'

export default function Register() {

    const [registerUser, setRegisterUser] = useState({
        firstName: '',
        lastName:'',
        email: '',
        pass: '',
        role: 'user'
    })

    const navigate = useNavigate()

    const onRegister = (e) => {
        e.preventDefault()
        if(registerUser.email && registerUser.pass){
            registerMethod(registerUser)
            .then(res => {
                if(res.data.message === 'User already registred'){
                    alert(res.data.message)
                }else{
                    navigate('/')
                }
            })
        }
    }

    return (
        <div className="container-fluid">
            <div className="row rov">
                <div className="col-4 left-col">
                    <h1 className='left-h1' >Welcome Back</h1>
                    <Link to='/'>
                        <button className='signInBtn'>Sign In</button>
                    </Link>
                </div>
                <div className="col-8 right-col">
                    <form onSubmit={onRegister} className='form_container' >
                        <h1 className='form-h1' >Create Account</h1>
                        <input className='input'
                        type="text" placeholder='First Name'
                        onChange={e => {setRegisterUser({...registerUser, firstName: e.target.value})}}
                        required
                        />
                        <input className='input' 
                        type="text" placeholder='Last Name' 
                        onChange={e => {setRegisterUser({...registerUser, lastName: e.target.value})}}
                        required
                        />
                        <input className='input' 
                        type="email" placeholder='Email' 
                        onChange={e => {setRegisterUser({...registerUser, email: e.target.value})}}
                        required
                        />
                        <input className='input' 
                        type="password" placeholder='Password' 
                        onChange={e => {setRegisterUser({...registerUser, pass: e.target.value})}}
                        required
                        />
                        <button type="submit" className='signUpBtn'>Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginMethod, setToLocalStrg } from '../../service/auth-service';
import './Login.css'

export default function Login({ setUsers }) {

    const [loginUser, setLoginUser] = useState({email:'', pass:''})

    const navigate = useNavigate()

    const onLogin = (e) => {
        e.preventDefault()
        loginMethod(loginUser)
        .then(res => {
            if(res.data.message === 'User not registred'){
                alert(res.data.message)
            }
            else if (res.data.message === 'Incorrect password'){
                alert(res.data.message)
            }
            else{
                //console.log('sve ok');
                setToLocalStrg(res.data)
                setUsers(res.data)
                navigate('/home')
            }
        })
    }


    return (
        <div className="container-fluid">
            <div className="row rov">
                <div className="col-8 log-right-col">
                    <form onSubmit={onLogin} className='form_container'>
                        <h1 className='form-h1'>Login to Your Account</h1>
                        <input type="email" placeholder='Email' 
                        className='input'
                        onChange={e => {setLoginUser({...loginUser, email: e.target.value})}} 
                        required
                        />
                        <input type="password" placeholder='Password' 
                        className='input' 
                        onChange={e => {setLoginUser({...loginUser, pass: e.target.value})}} 
                        required
                        />
                        <button type="submit" className='signUpBtn'>Sing In</button>
                    </form>
                </div>
                <div className="col-4 log-left-col">
                    <h1 className='left-h1'>New Here ?</h1>
                    <Link to={'/register'} >
                        <button className='signInBtn'>Sing Up</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import SinglePost from './pages/SinglePost/SinglePost';

export default function App() {

  const [users, setUsers] = useState({})

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login setUsers={setUsers} />} />  
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<HomePage users={users} setUsers={setUsers} />} />
        <Route path='/profile' element={<Profile users={users} setUsers={setUsers} />} />
        <Route path='/post/:id' element={<SinglePost />} />
      </Routes>
    </BrowserRouter>
  )
}

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

export default function App() {

  const [users, setUsers] = useState({})

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login setUsers={setUsers} />} />  
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<HomePage users={users} setUsers={setUsers} />} />
      </Routes>
    </BrowserRouter>
  )
}

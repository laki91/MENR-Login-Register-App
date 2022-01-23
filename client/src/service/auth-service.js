import axios from 'axios'

export const registerMethod = (body) => {
    return axios.post('/register', body)
}

export const loginMethod = (body) => {
    return axios.post('login', body)
}

export const setToLocalStrg = (user_data) => {
    localStorage.setItem('app_user_data', JSON.stringify(user_data))
}

export const getUserData = () => {
    let userData = localStorage.getItem('app_user_data');
    return userData ? JSON.parse(userData) : null
}

export const logOutApp = () => {
    localStorage.removeItem('app_user_data')
}

export const addPost = (body) => {
    return axios.post('/create', body)
}

export const deleteFromDb = (body) => {
    axios.post('/delete', {id: body})
}
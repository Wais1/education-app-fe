import axios from 'axios' // Use axios to make HTTP requests to backend service

// Strictly for http requests, sending data back, and setting data in localstorage

// May need to change with ENV variable to backend URL or make backend URL http
// Do not forget to add server port (flexible or 5000). alternatively can add proxy to package.json with value http://localhost:5000
const ENDPOINT = process.env.REACT_APP_SERVICE_URI? process.env.REACT_APP_SERVICE_URI : `http://${window.location.hostname}:5000`
const API_URL = `${ENDPOINT}/api/users/`

// Register user (user passed in)
// to http://localhost:5000/api/users/
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    // Axios puts data inside object called 'data'. Check if available
    if(response.data) {
        // Store the token response in localstorage, which only accepts strings.
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log(response.data)
    }

    return response.data
}

// Login user
const login = async (userData) => {
//  to http://localhost:5000/api/users/login
    const response = await axios.post(API_URL + 'login', userData)

    // Axios puts data inside object called 'data'. Check if available
    if(response.data) {
        // Store the token response in localstorage, which only accepts strings.
        localStorage.setItem('user', JSON.stringify(response.data))
        console.log(response.data)
    }

    return response.data
}


// Logout user
// Also need to implement async call, probably.
// Future implementation can send httpOnly cookie instead.
const logout = async () => {
    // Remover user item which contains token
    localStorage.removeItem('user')
}

const authService = {
    register,
    logout,
    login
}

export default authService
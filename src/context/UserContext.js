import React, { createContext, useReducer } from 'react'
import UserReducer from './UserReducer'
import axios from 'axios'
import authService from '../auth/authService'


// Get user from localStorage. Use JSON.parse because localstorage only has strings
// use 'user' or 'token' ? its user, because we set localstorage to user

// must probably put in axios header config to include auth
// see API.js and setauthtoken file later

const user = JSON.parse(localStorage.getItem('user'))

// Can check if user exists in localstorage here probably?
const initialState = {
    // Auth states. If there is a user, use that, otherwise null
    user: user ? user : null,
    // token: localStorage.getItem('user') or token, but in this case user cuz se set to user,
    isAuthenticated: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Create context
export const UserContext = createContext(initialState)

// Provider component
export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);
    
    // Actions that call reducer
    // GET to backend
    // should include server ip in env, cannot
    // ignore endpoint here because we did not add proxy
    const ENDPOINT = process.env.REACT_APP_SERVICE_URI? process.env.REACT_APP_SERVICE_URI : `http://${window.location.hostname}:5000`
    async function getTransactions() {
        try {
            const res = await axios.get(ENDPOINT+'/api/users/')

            // revise res.data, could need res.data.data
            dispatch({
                type: 'GET_TRANSACTIONS',
                payload: res.data
            })

            // Set local cookie here for login / register , and set user state? idk 
        } catch (err) {
            // revise res.data, could need res.data.data
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }

    // Register user
    async function register(userData) {
        try {
            await authService.register(userData)

            // If success,ful put user in data
            dispatch({
                type: 'REGISTER',
                payload: userData
            })
        } catch (error) {
            // look for errors
            const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
            dispatch({
                type: 'REGISTER_FAIL',
                payload: message,
            })
        }
    }

    // Login user
    async function login(userData) {
        try {
            await authService.login(userData)

            // If success,ful put user in data
            dispatch({
                type: 'LOGIN',
                payload: userData
            })
        } catch (error) {
            // look for errors
            const message = (error.response && error.response.data && error.response.data.message || error.message || error.toString())
            dispatch({
                type: 'REGISTER_FAIL',
                payload: message,
            })
        }
    }

    // Logout function
    async function logout() {
        try {
            await authService.logout()

            // Set user to 'null' with token in context
            dispatch({
                type: 'LOGOUT',
            })
        } catch (error) {
            dispatch({
                type: 'ERROR',
                payload: 'Logout has failed',
            })
        }
    }

    async function deleteTransaction(id) {
        try {
            await axios.delete(`${ENDPOINT}/api/users/${id}`)
        } catch (err) {
            // revise res.data, could need res.data.data
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }

        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    
    // Add
    async function addTransaction(transaction) {
        const config = {
            // Probably must add token from localstorage here in header.
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            // Update URL
            // Check everything as if starting fresh
            const res = await axios.post(`${ENDPOINT}/api/users/`, transaction, config)

            // Must check res.data or res.data.data or etc
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: res.data.data  // To return new
            })
        } catch (err) {
            dispatch({
                type: 'ERROR',
                payload: err.response.data.error
            })
        }
    }

    // Sets an error for the state
    function setError(message) {
        dispatch({
            type: 'SET_ERROR',
            payload: message
        })
    }

    // Reset state of isLoading, isSuccess, isError, to false,
    // message: '',
    function reset()
    {
        dispatch({
            type: 'RESET'
        })
    }


    return (<UserContext.Provider value={{
        isError: state.isError,
        isLoading: state.isLoading,
        isSuccess: state.isSuccess,
        message: state.message,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        deleteTransaction,
        addTransaction,
        getTransactions,
        setError,
        register,
        reset,
        logout,
        login
    }}>
        {children}
    </UserContext.Provider>);
}
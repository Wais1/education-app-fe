export default (state, action) => {
    switch(action.type) {
        case 'GET_TRANSACTIONS':
            return {
                ...state,
                loading: false, // loading false because now data is fetched,
                transactions: action.payload
                // Can set user state here
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter((transaction => transaction._id != action.payload))
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload] 
            }
        case 'ERROR':
            return {
                ...state,
                isError: true,
                message: action.payload
            }
            // Doesn't matter yet: sample in register.jsx
        case 'REGISTER': 
            return {
                ...state,
                isSuccess: true,
                // 
                user: action.payload,
            }
        case 'REGISTER_FAIL':
            return {
                ...state,
                isError: true,
                message: action.payload,
                user: null
            }
            // FROM THUNK SECTION ONWARDS
            // RESET message, loading, success, after action like register is complete
        case 'SET_ERROR':
            return {
                ...state,
                isError: true,
                message: action.payload,
            }
        case 'RESET':
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                isError: false,
                message: '',
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
            }
        case 'LOGIN':
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                user: action.payload,
            }
        default:
            return state
    }
}

// For logout 
// ...state,
// token: null,
// isAuthenticated: false,
// loading: false,
// user: null
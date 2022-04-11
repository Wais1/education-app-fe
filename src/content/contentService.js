import axios from "axios";

const ENDPOINT = process.env.REACT_APP_SERVICE_URI? process.env.REACT_APP_SERVICE_URI : `http://${window.location.hostname}:5000`
// Send to /api/content
const API_URL = `${ENDPOINT}/api/content/`

// Create new goal
const createGoal = async (goalData, token) => {
    // Can put this config in a file and make it default.
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, goalData, config)

    return response.data
}

// Create new goal
const createResource = async (text, token) => {
    // Can put this config in a file and make it default.
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const response = await axios.post(API_URL, text, config)

    return response.data
}


// Get goals
// Create new goal
const getGoals = async (token) => {
    // Can put this config in a file and make it default.
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    // const response = await axios.get(API_URL, goalData, config) Would need to include param here if adding later
    const response = await axios.get(API_URL, config) 

    return response.data
}

// Gets a resource from the db.
const getResource = async (token) => {
    // Can put this config in a file and make it default.
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    // May need to pas in 'contentID' here, either form params or something
    // const response = await axios.get(API_URL, goalData, config) Would need to include param here if adding later
    const response = await axios.get(API_URL, config) 

    return response.data
}


const contentService = {
    createGoal,
    getGoals,
    getResource,
}

export default contentService
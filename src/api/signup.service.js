import axios from 'axios';

const sampleApiBaseUrl = `${process.env.REACT_APP_JOBS_PORTAL_BASE_URL}/`;

let headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const signup = async (data) => {
    try {
        headers = {
            ...headers,
        }
        const response = await axios.post(`${sampleApiBaseUrl}auth/register`,data ,{ headers });
        return response
    }
    catch (err) {
        return err
    }
}
export {
    signup
}
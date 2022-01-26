import axios from 'axios';

const sampleApiBaseUrl = `${process.env.REACT_APP_JOBS_PORTAL_BASE_URL}/`;

let headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const getJobs = async () => {
    try {
        headers = {
            ...headers,
        }
        const response = await axios.get(`${sampleApiBaseUrl}jobs`, { headers });
        return response
    }
    catch (err) {
        return err
    }
}
export {
    getJobs
}
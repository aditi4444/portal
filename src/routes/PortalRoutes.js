
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

// Components
import Dashboard from '../components/Home.jsx/Dashboard';
import JobsPortal from '../JobsPortal';

const PortalRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<JobsPortal/>} />
                <Route exact path="/jobs" element={<Dashboard/>} />
            </Routes>
        </Router>
    )

}

export default PortalRoutes
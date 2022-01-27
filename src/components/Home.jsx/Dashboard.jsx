import React, { useEffect, useState } from 'react';
import { GoLocation } from 'react-icons/go'

// Material UI
import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core';

// API
import { getJobs } from '../../api/jobs.service';

// Components
import Header from '../../layouts/header';

const Dashboard = () => {
    const [jobs, setJobs] = useState([]);

    // Redirection

    useEffect(() => {
        const fetchData = async () => {
            const res = await getJobs()
            if (res?.data?.code === 200) {
                setJobs(res?.data?.data)
            }
        }
        fetchData();
    }, [])

    const goToHome = () => {
        // redirection to home
    }

    return (
        <div className="container">

            <Header field="dashboard" />

            <div className='jobsHeader' >
                <Button onClick={()=> {goToHome()}}><Typography style={{ color: "white" }}>Home</Typography></Button>
                <Typography style={{fontSize: "22px", fontWeight: "normal", color: "white"}}>Jobs posted by you</Typography>
            </div>
            <div className='jobsCardBox'>
                {jobs?.map((item, index) => {
                    return (
                        <Card className="jobsCard" key={index} >
                            <CardContent><Typography style={{ fontWeight: "bold", fontSize:"18px" }}>{item.title}</Typography>
                            {item.description}
                            <div className='cardFooter'>
                                <GoLocation color='#43AFFF' style={{padding:"3px"}} />
                            {item.location}
                            <CardActions>
                                <Button size='small' classNmae="viewAppBtn" style={{ backgroundColor: "#43AFFF33", textTransform: "none", width: "max-content" }}>View Applications</Button>
                            </CardActions>
                            </div>
                            </CardContent>
                        </Card>
                    )
                })}
            </div>
        </div>
    )
}
export default Dashboard
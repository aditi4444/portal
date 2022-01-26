import React from 'react';

// Header
import Header from './layouts/header';

// Material UI
import { Card, CardContent, Divider, Typography } from '@material-ui/core'

const JobsPortal = () => {
    return (
        <div>
            <div className='blueBox'>
                <Header />
                <Divider variant="middle" className="divider" />
                <div className='container'>
                    <Typography variant='h2'>Welcome to
                        <p className='headerText'>My<span className='firstWord'>Jobs</span></p>
                    </Typography>
                    <img src="/assets/images/file_example.png" alt='' width={"50%"} height={"50%"} style={{ borderRadius: "5px" }} />
                </div>
            </div>
            <div className='detailsBox'>
                <Typography variant='h6'>Why Us</Typography>
                <div className='cardBox'>
                    <Card className="detailsCard">
                        <CardContent>
                            <Typography variant='h6' className="cardHeading" gutterBottom component="div">
                                Get more visibility
                            </Typography>
                            <Typography variant="caption" component="div">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className="detailsCard">
                        <CardContent>
                            <Typography variant='h6' className="cardHeading" gutterBottom>
                                Organize your candidates
                            </Typography>
                            <Typography variant="caption" component="div">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className="detailsCard">
                        <CardContent>
                            <Typography variant='h6' className="cardHeading" gutterBottom>
                                Verify their abilities
                            </Typography>
                            <Typography variant="caption" component="div">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
export default JobsPortal
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

// Material UI
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@material-ui/core';

// API
import { signup } from '../../api/signup.service';


const SignupDialog = ({ open, onCloseSignUp }) => {

    // Recruiter = 0
    // Candidate = 1
    const [userRole, setUserRole] = useState(0)
    const [userData, setUserData] = useState(null)

    const handleCloseDialog = () => {
        onCloseSignUp(false);
    };

    const onChange = (field, value) => {
        if (field === 'name') {
            setUserData({ ...userData, name: value })
        }
        if (field === 'email') {
            setUserData({ ...userData, email: value })
        }
        if (field === 'password') {
            setUserData({ ...userData, password: value })
        }
        if (field === 'confirmPassword') {
            setUserData({ ...userData, confirmPassword: value })
        }
        if (field === 'skills') {
            setUserData({ ...userData, skills: value })
        }
    }

    const onSignUp = async() => {

        // Request body
        const data = {
            ...userData, userRole
        }

        if (userData.password !== userData.confirmPassword) {
            toast.error('Passwords did not match!')
        }else if (userData.name && userData.email && userData.password && userData.confirmPassword && userData.skills) {
            // API call
            const res = await signup(data);
            if(res?.response?.status === 201){
                handleCloseDialog()
                toast.success('You have signed up successfully.')
            }else{
                // errors array
                toast.error(res?.response?.data?.message)
            }
        } else {
            toast.error('Please fill all the details')
        }
    }
    return (
        <React.Fragment>

            {/* Toast */}
            <ToastContainer />

            <Dialog open={open}
                maxWidth={'lg'}
                onClose={handleCloseDialog}
            >
                <DialogTitle className="loginDialogTitle">Signup</DialogTitle>
                <DialogContent>
                    <label>I'm a*</label>
                    <ul className="userRoleBox">
                        <li className={userRole === 0 ? 'active' : ''}
                            onClick={() => setUserRole(0)}
                        >Recruiter</li>
                        <li className={userRole === 1 ? 'active' : ''}
                            onClick={() => setUserRole(1)}

                        >Candidiate</li>
                    </ul>
                </DialogContent>
                <DialogContent
                    className="loginTextField">
                    <TextField
                        autoFocus
                        required
                        type="text"
                        fullWidth
                        label="Full Name"
                        onChange={(e) => { onChange('name', e.target.value) }}
                    />
                </DialogContent>
                <DialogContent
                    className="loginTextField">
                    <TextField
                        required
                        type="email"
                        fullWidth
                        label="Email Address"
                        onChange={(e) => { onChange('email', e.target.value) }}
                    />
                </DialogContent>
                <DialogContent>
                    <TextField
                        required
                        type="password"
                        label="Create Password"
                        onChange={(e) => { onChange('password', e.target.value) }}

                    />
                    <TextField style={{ marginLeft: "12px" }}
                        required
                        type="password"
                        label="Confirm Password"
                        onChange={(e) => { onChange('confirmPassword', e.target.value) }}
                    />
                </DialogContent>
                <DialogContent>
                    <TextField
                        type="text"
                        fullWidth
                        label="Skills"
                        onChange={(e) => { onChange('skills', e.target.value) }}
                    />
                </DialogContent>
                <DialogActions className="loginButton" style={{ alignSelf: "center", padding: "18px" }}>
                    <Button variant="contained" disableElevation color="primary"
                        onClick={() => { onSignUp() }}
                    >
                        Signup
                    </Button>
                </DialogActions>

                <Typography style={{ fontSize: "12px", alignSelf: "center", paddingBottom: "12px" }}>Have an account?
                    <span className='firstWord' style={{ fontSize: "12px", cursor: "pointer" }}> Login</span>
                </Typography>
            </Dialog>
        </React.Fragment>
    )
}
export default SignupDialog
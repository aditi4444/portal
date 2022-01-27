import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';

// Material UI
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography } from '@material-ui/core';

// API
import { login } from '../../api/login.service';

const Login = ({ open, onClose, onSignUp, onForgotPassword }) => {
    // Data
    const [userData, setUserData] = useState({ email: '', password: '' });

    // Errors
    const [errors, setErrors] = useState(null)
    const [errorMsg, setErrorMsg] = useState('')

    // Redirection
    const navigate = useNavigate()

    const handleCloseDialog = () => {
        onClose(false);
    };

    const onChange = (field, value) => {
        if (field === 'email') {
            setUserData({ ...userData, email: value })
        } else {
            setUserData({ ...userData, password: value })
        }
        setErrors(null);
        setErrorMsg('');
    }

    const onLogin = async () => {
        if (userData.email && userData.password) { // API call only if user has filled up the fields
            const data = {
                email: userData.email,
                password: userData.password
            }
            const res = await login(data);
            if (res?.data?.code === 200) {
                toast.success('Logged In successfully.')
                handleCloseDialog()
                navigate('/home/jobs')

            } else {
                setErrors(res?.response?.data?.errors)
            }
            if (res?.response?.data?.message) {
                setErrorMsg(res.response.data.message);
                toast.error(res.response.data.message);
            }
        } else {
            setErrorMsg('Please fill required fields')
        }
    }

    const goToSignup = () => {
        onSignUp(true)
    }

    const onForgotPass = () => {
        onForgotPassword(true)
    }

    return (
        <React.Fragment>
            <ToastContainer />
            <Dialog open={open}
                maxWidth={'lg'}
                onClose={handleCloseDialog}
            >
                <DialogTitle className="loginDialogTitle">Login</DialogTitle>
                <DialogContent
                    className="loginTextField">
                    <TextField
                        autoFocus
                        required
                        type="email"
                        fullWidth
                        onChange={(e) => onChange('email', e.target.value)}
                        label="Email"
                        error={errors?.find((item) => { return item['email'] })}
                        helperText={errors?.map(item => item.email)}
                    />
                </DialogContent>
                <DialogContent>
                    <TextField
                        required
                        type="password"
                        fullWidth
                        onChange={(e) => onChange('password', e.target.value)}
                        label="Password"
                        error={errors && errors.find((item) => { return item['password'] })}
                        helperText={errors && errors.map(item => item.password)}

                    />
                    {errorMsg && <div style={{ display: "flex", justifyContent: "end" }}><span style={{ fontSize: "12px", color: "red" }} >{errorMsg}</span></div>}
                </DialogContent>
                <DialogActions className="loginButton" style={{ alignSelf: "center", padding: "18px" }}>
                    <Button variant="contained" disableElevation color="primary"
                        onClick={() => onLogin()}
                    >
                        Login
                    </Button>
                </DialogActions>

                <div className="dialogFooter">
                    <Typography style={{ fontSize: "12px", alignSelf: "center", padding: "12px" }}>New to MyJobs?
                        <span className='firstWord' style={{ cursor: "pointer" }} onClick={() => { goToSignup() }}> Create an account</span>
                    </Typography>
                    <span className='firstWord' style={{ fontSize: "12px", padding: "12px", cursor: "pointer" }} onClick={() => { onForgotPass() }} >Forgot Password?</span>
                </div>
            </Dialog>
        </React.Fragment>
    )
}
export default Login
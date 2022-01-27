import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// material UI
import { Button, Typography } from '@material-ui/core';

// Components
import Login from '../../components/Dialogs/Login';
import ForgotPassword from '../../components/Dialogs/ForgotPassword';
import SignupDialog from '../../components/Dialogs/SignupDialog';

const Header = (props) => {

    // Dialog Box Open
    const [openLogin, setOpenLogin] = React.useState(false);
    const [openSignUp, setOpenSignUp] = React.useState(false);
    const [openForgotPass, setOpenForgotPass] = React.useState(false);

    // Redirection
    const navigate = useNavigate();

    const onButtonClick = () => {
        setOpenLogin(true)
    }
    const handleCloseLogin = () => {
        setOpenLogin(false)
    }

    const handleCloseSignUp = () => {
        setOpenSignUp(false)
    }
    const handleCloseForgotPass = () => {
        setOpenForgotPass(false)
    }

    const onSignUp = () => {
        setOpenSignUp(true)
        handleCloseLogin()
    }

    const onForgotPassword = () => {
        setOpenForgotPass(true)
        handleCloseLogin()
    }

    
    const onLogout = () => {
        toast.success('You have been logged out successfully');
        navigate('/home')
    }

    return (
        <div className="appHeader">
            <Typography className='headerText'>My<span className='firstWord'>Jobs</span></Typography>
            <div className='loginSignUpBtn'>
            {props.field === 'dashboard'
            ?
            <Button style={{ color: "white"}} onClick={() => onLogout()} >
                <Typography>Logout</Typography>
            </Button>
            :
            <Button style={{ color: "white"}} onClick={() => onButtonClick()} >
                <Typography>Login / Signup</Typography>
            </Button>
            }
            </div>

            {/* Login Dialog */}
            {openLogin &&
                <Login
                    open={openLogin}
                    onClose={handleCloseLogin}
                    onSignUp={onSignUp}
                    onForgotPassword={onForgotPassword}
                />
            }

            {/* SignUp Dialog */}
            {openSignUp &&
                <SignupDialog
                    open={openSignUp}
                    onCloseSignUp={handleCloseSignUp}
                />
            }

            {/* Forgot Password Dialog */}
            {openForgotPass &&
                <ForgotPassword open={openForgotPass} onCloseForgotPass={handleCloseForgotPass} />
            }
        </div>
    )
}
export default Header
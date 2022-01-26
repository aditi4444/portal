import React from 'react';

// material UI
import { Typography } from '@material-ui/core';
import Login from '../../components/Dialogs/Login';

// Components
import ForgotPassword from '../../components/Dialogs/ForgotPassword';
import SignupDialog from '../../components/Dialogs/SignupDialog';

const Header = () => {

    // Dialog Box Open
    const [openLogin, setOpenLogin] = React.useState(false);
    const [openSignUp, setOpenSignUp] = React.useState(false);
    const [openForgotPass, setOpenForgotPass] = React.useState(false);

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
    return (
        <div className="header">
            <Typography className='headerText'>My<span className='firstWord'>Jobs</span></Typography>
            <button className='loginSignUpBtn' onClick={() => onButtonClick()} >
                <Typography>Login/SignUp</Typography>
            </button>

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
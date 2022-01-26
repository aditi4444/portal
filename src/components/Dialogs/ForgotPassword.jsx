import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

// Material UI
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core'

// API
import { resetPassword } from '../../api/resetPassword.service'

const ForgotPassword = ({open, onCloseForgotPass}) => {
    // Fields
    const [email, setEmail] = useState('')

    // Errors
    const [errors, setErrors ] = useState('')

    const onChange = (value) => {
        setEmail(value);
        setErrors('')
    }

    const onSubmit = async() => {
        if(email){   
            const res = await resetPassword(email)
            if(res?.data?.code === 201){
                toast.success('Instructions to reset your password have been sent to your mail address')
                onCloseForgotPass(false)
            }else{
                toast.error(res?.response?.data?.message)
                setErrors(res?.response?.data?.message)
            }
        }else{
            setErrors('Please enter email address.')
        }
    }
    return (
        <Dialog open={open} onClose={onCloseForgotPass} >
            <ToastContainer/>
            <DialogTitle>
                Forgot your password?
            </DialogTitle>
            <DialogContent>
            Enter the email associated with your account and we’ll send you instructions to reset your password.
            </DialogContent>
            <DialogContent>
            <TextField
                        autoFocus
                        required
                        type="email"
                        fullWidth
                        onChange={(e) => onChange(e.target.value)}
                        label="Email"
                        error={errors?.length > 0}
                        helperText={errors}
                    />
        </DialogContent>
        <DialogActions className="loginButton" style={{ alignSelf: "center", padding: "18px" }}>
                    <Button variant="contained" disableElevation color="primary"
                        onClick={() => onSubmit()}
                    >
                        Submit
                    </Button>
                </DialogActions>
        </Dialog>
    )
}
export default ForgotPassword
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';

function Login({ updateUser }) {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState([])
    const { email, password } = formData
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    function onSubmit(e) {
        e.preventDefault()
        const user = {
            email,
            password
        }
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
            .then(resp => {
                if (resp.ok) {
                    resp.json().then(user => {
                        navigate('/')
                        updateUser(user)
                    })
                    // updateErrors()
                } else {
                    resp.json().then(json => setErrors(json.errors))
                }
            })
    }

    return (
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
            noValidate
            autoComplete="on"
            onSubmit={onSubmit}
        >
            <div>
                <div>
                    <h2>Please Login</h2>
                </div>
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />

                    <div>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                        >
                            Login
                        </Button>
                    </div>
                    {errors ? <div>{errors}</div> : null}
                </div>
            </div>
        </Box>
    )
}

export default Login;

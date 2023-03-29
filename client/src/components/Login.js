import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

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
    <form className="login-container"  onSubmit={onSubmit}>
        <div className='login-form'>
            <div>
                <h2>Please Login</h2>
            </div>
            <div>
                    <label className="relative block">
                        <input
                            placeholder='Email'
                            name="email"
                            type="text"
                            value={email}
                            onChange={handleChange}
                            className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        />
                        {/* <input
                            name="email"
                            type="text"
                            value={email}
                            onChange={handleChange}
                        /> */}
                        <input
                            placeholder='Password'
                            name="password"
                            type="password"
                            value={password}
                            onChange={handleChange}
                            className="mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                        />
                        {/* <input
                            name="password"
                            type="password"
                            value={password}
                            onChange={handleChange}
                        /> */}
                        <div className='login-button'>
                        <button>
                            Login
                            </button>
                        </div>
                    </label>
                {errors ? <div>{errors}</div> : null}
            </div>
        </div>
    </form>
    )
}


export default Login;

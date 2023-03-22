import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Login ({updateUser}) {
    const [formData, setFormData] = useState({
        email:'',
        password:''
    })

    const [errors, setErrors] = useState([])
    const {email, password} = formData
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    function onSubmit(e){
        e.preventDefault()
        const user = {
            email,
            password
        }
        fetch('/login',{
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(user)
        })
        .then(resp => {
            if(resp.ok){
                resp.json().then(user => {
                    navigate('/')
                    updateUser(user)})
                    // updateErrors()
            } else {
                resp.json().then(json => setErrors(json.errors))
            }
        })
    }

    return (
        <div>
            <div>
                <h2>Login</h2>
            </div>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        name="email"
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={handleChange}
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleChange}
                    />
                    <div>
                        <button
                            type="submit"
                            >Login
                        </button>
                    </div>
                </form>
                {errors? <div>{errors}</div>:null}
            </div>
        </div>
    )
}

export default Login;
import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Register = () => {

    const history = useHistory()

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        // console.log(e.target)
        const { name, value } = e.target

        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if (name && email && password && (password === reEnterPassword)) {
           // alert("Submitted Successfully")
            axios.post("http://localhost:9002/register", user)
            .then(res => {
                alert(res.data.message)
                history.push("/login")
            })
        }else{
            alert("Invalid")
        }
    }

    return (
        <div className="register">
            <h1>Register Page</h1>
            <input type="text" name="name" value={user.name} placeholder="Enter Your Name" onChange={handleChange}></input>
            <input type="text" name="email" value={user.email} placeholder="Enter Your Email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange}></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Confirm Your Password" onChange={handleChange}></input>
            <div className="button" onClick={register}>Register</div>
            <div>OR</div>
            <div className="button" onClick={()=> history.push("/login")}>Login</div>
        </div>
    )
}

export default Register
import REACT, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [user, setUser] = useState({
        email:"",
        password:"",
    })

     const handleChange = e =>{
        // console.log(e.target)
         const{name, value} = e.target

         setUser({
             ...user,
             [name]: value
         })
     }

     const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
     }

    return(
        <div className="login">
            <h1>Login Page</h1>
            <input type="text" name="email" value={user.email} placeholder="Enter Your email" onChange={handleChange}></input>
            <input type="password" name="password" value={user.password} placeholder="Password" onChange={handleChange}></input>
            <div className="button" onClick={login}>Login</div>
            <div>OR</div>
            <div className="button" onClick={() => history.push("/register")}>Register</div>
        </div>
    )
}

export default Login
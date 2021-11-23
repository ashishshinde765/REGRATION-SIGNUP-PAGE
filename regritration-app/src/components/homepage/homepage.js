import REACT, {useState} from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {

  /**  const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })

     const handleChange = e =>{
        // console.log(e.target)
         const{name, value} = e.target

         setUser({
             ...user,
             [name]: value
         })
     }
 */
    return(
        <div className="homepage">
            <h1>Homepage</h1>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
    )
}

export default Homepage
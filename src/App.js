
import {useState,useEffect} from "react"
import Navbar from './Navbar.js'
import {BrowserRouter as Router,Link, Route, Switch,useHistory} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp' 
import CollegeDetail from './CollegeDetail'
import Dashboard from './dashboard/Dashboard'
import Axios from "axios"


function App() {
  Axios.defaults.withCredentials = true
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const [loginStatus, setLoginStatus] = useState({})
 
  useEffect(() => {
    Axios.get("http://localhost:3001/user")
    .then((res)=>{   
      if (res.data.loggedIn == true){
        setLoginStatus(res.data.user[0])
    setIsLoggedIn(res.data.loggedIn)
      }
    
    })
    
}, [])
console.log(isLoggedIn)
console.log(loginStatus)
  return (
   <div>
     <Router> 

        <Switch>
          <Route exact path="/">
          <Navbar/>

            <Home  />
          </Route>
          <Route exact path="/login">
          <Navbar />

            <Login  />
          </Route>
          <Route exact path="/signup">
          <Navbar  />

            <SignUp/>

          </Route>
          <Route path="/collegedetails/:id"   component={CollegeDetail}>
            
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>

        </Switch>
     </Router>
 
   </div>
  );
}

export default App;

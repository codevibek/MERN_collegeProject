
import {useState} from "react"
import Navbar from './Navbar.js'
import {BrowserRouter as Router,Link, Route, Switch,useHistory} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import SignUp from './SignUp' 
import CollegeDetail from './CollegeDetail'
import Dashboard from './dashboard/Dashboard'
function App() {
  let history=useHistory()
  const [isLoggedIn,setIsLoggedIn]=useState(false)
  const loginStatus=(data)=>{
    
    if(data==="success"){
      setIsLoggedIn(true)
      // history.push("/")
    }
    else{
      setIsLoggedIn(false)
    }
  }
  console.log(isLoggedIn)
  return (
   <div>
     <Router>

        <Switch>
          <Route exact path="/">
          <Navbar/>

            <Home/>
          </Route>
          <Route exact path="/login">
          <Navbar isLoggedIn={isLoggedIn}/>

            <Login loginStatus={loginStatus}/>
          </Route>
          <Route exact path="/signup">
          <Navbar isLoggedIn={isLoggedIn} loginStatus={loginStatus}/>

            <SignUp/>

          </Route>
          <Route path="/collegeDetails/:id" component={CollegeDetail}>
            
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

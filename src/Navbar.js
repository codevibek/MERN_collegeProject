import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = ({isLoggedIn,loginStatus}) => {

    const [input, setInput] = useState('')

    const handleChange = e =>{
        e.preventDefault()
        setInput(e.target.value)
        console.log(input)
        }
    return (
        <nav>
            <div className="nav__logoContainer">
                <img src="https://samriddhicollege.edu.np/wp-content/uploads/2020/11/Samriddhi-College-logo-scaled.jpg" alt="logo" className="nav__image"/>
            </div>
            <div className="nav__search">
                <input type="text" placeholder="search" value={input} onChange={handleChange}/>
            </div>
            <div className="nav__logSign">
                {(isLoggedIn)?
                (<div>
                    
                   <Link className="nav__logSignUp" to="/"><button onClick={loginStatus}>LogOut</button> </Link>

                    </div>
                ):
                (<div>
                <Link className="nav__logSignUp" to="/login"><button >Login</button> </Link>
               <Link className="nav__logSignUp" to="/signup"><button>Signup</button> </Link>
          
                </div>)}
                 </div>
        </nav>
    )
}

export default Navbar

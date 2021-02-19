import React,{useState,useEffect} from 'react'
import Axios from 'axios' 
import './Home.css'
import CollegeCard from "./CollegeCard"


const Home = () => {
    const [collegeList ,setCollegeList] = useState([])
    useEffect(() => {
       
        Axios.get("http://localhost:3001/colleges")
        .then((res)=>setCollegeList(res.data))
        
    }, [])
    return (
        <div className="home" style={{display:"flex",alignItems:"center",justifyContent:"space-around",flexWrap:"wrap",margin:"0 130px"}}>
          {
              collegeList?.map((college)=>{
                  const {c_id,c_name,c_location,c_email,c_phone} = college
                  return(
                    <CollegeCard id={c_id} key={c_id} email={c_email} phone={c_phone} name={c_name} location={c_location}/>
                  )
              })
          }
         
          
       
        </div>
    )
}

export default Home

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
                    <CollegeCard id={c_id} email={c_email} phone={c_phone} name={c_name} location={c_location}/>
                  )
              })
          }
         
          
           {/* <label>College Name</label>
           <input type="text"
           onChange={e=>setName(e.target.value)}/>
           <label>Number of Student</label>
           <input type="number"
            onChange={e=>setNoOfStudent(e.target.value)}/>
           <label>Fee</label>
           <input type="number" 
           onChange={e=>setFee(e.target.value)}/>
           <label>Location</label>
           <input type="text" 
           onChange={e=>setLocation(e.target.value)}/>
           <label>Facility</label>
           <input type="text" 
           onChange={e=>setFacility(e.target.value)}/>
           <label>Pass result</label>
           <input type="number"
           onChange={e=>setPassResult(e.target.value)}/>
           <label>ECA</label>
           <input type="text" 
           onChange={e=>setEca(e.target.value)}/>

           <button onClick={addCollege}>Add college</button>
           <hr />
           <div className="colleges">
                <button onClick={getColleges}>Show colleges</button>
           </div>
                {collegeList.map((c,key)=>{
                    return(<div key={c.c_id} >
                        {c.c_name}
                        {c.c_fee}
                        <input type="text" onChange={(e)=>setNewName(e.target.value)}/>
                        <button onClick={()=>updateCollege(c.c_id)}>Update</button>
                        <button onClick={()=>deleteCollege(c.c_id)}>Delete</button>
                        </div>)
                })} */}
        </div>
    )
}

export default Home

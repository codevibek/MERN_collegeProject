import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import "./CollegeDetails.css"
import {Link} from "react-router-dom"
import ReviewCard from "./ReviewCard"
import CollegeCard from './CollegeCard'
import college1 from './college1.jpg'



const CollegeDetail = ({match}) => {
    const fee = "50000;45000"
    const [collegeDetail,setCollegeDetail]= useState({})
    let id = match.params.id
    console.log(id)

    // useEffect(() => {
    //     getCollegeDetail()
       
       
    // }, [])
    //  async function getCollegeDetail(){
    //     await Axios.get(`http://localhost:3001/colleges/${id}`)
    //     .then((res)=>setCollegeDetail(res.data))
        
    // }
    
    //     const {c_name,
    //         c_noofstudents,
    //         c_fee,
    //         c_location,
    //         c_facility,
    //         c_ECA,
    //         c_pastresult,
    //         c_phone,
    //         c_email}=collegeDetail[0]
    
  
    return (
        <div className="collegeDetail" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <Link to="/login">
                <button className="rate_us">Rate Us</button>
               
                </Link>
            <div style={{width:"100vw",
            height:"60vh",
            
            }}>
                <img style={{height:"100%",width:"100%",objectFit:"fill"}}  src={college1} alt="college banner" className="College"/>

            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <h1>College Name</h1>
                <h3 style={{marginTop:"-15px"}}>location</h3>
            </div>
            <div style={{width:"100%",display:"flex",flexDirection:"column"}}>
                <h3 style={{textAlign:"center",marginTop:"-10px"}}>Parameters Of College</h3>
                <div className="details_container">
                    <div className="heading_container">

                    
                    
                    <div className="heading">
                        
                        No of Students
                    </div>
                    <div className="heading">
                        Past Result
                    </div>
                    <div className="heading">
                        ECA
                    </div>
                    <div className="heading">
                        Fee
                    </div>
                    <div className="heading">
                        Location
                    </div>
                    <div className="heading">
                        Facilities
                    </div>
                    </div>


                    <div className="details_info">
                             <div className="details_detail">
                                521
                            </div>   
                            <div className="details_detail">
                                80%
                            </div> 
                            <div className="details_detail">
                                Sports,Workshop 
                            </div> 
                            <div className="details_detail">
                                {fee.split(";")[0]}<br/>
                                {fee.split(";")[1]}
                            </div> 
                            <div className="details_detail">
                                SinaMangal,Kathmandu
                            </div> 
                            <div className="details_detail">
                                Good
                            </div> 
                                                          
                    </div>
                </div>

                
            </div>
            <h3>Reviews</h3>
            <h3 className="rateAndReview" >
                <ReviewCard/>
                <ReviewCard />
                <ReviewCard />

            </h3>

            <div className="recommended_college">
                <h3>Recommended Colleges</h3>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}} className="colleges">
                <CollegeCard/>
                <CollegeCard/>
                <CollegeCard/>
                </div>
                

            </div>
            <footer style={{height:"150px",display:"flex",flexDirection:"column",alignItems:"center", color:"white",background:"black",width:"100%"}}>
                <h4 >Contact Us</h4>
                <span>Email</span>
                <span>Website</span>
                <span>phone</span>
                <span style={{fontSize:"12px", textAlign:"start"}}>copyright</span>
                
                
            </footer>
        </div>
    )
}

export default CollegeDetail

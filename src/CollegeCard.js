import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import college1 from './college1.jpg'

const CollegeCard = ({name,location,email,phone,id}) => {
    
    return (
        <div  style={{

            width:"200px",
            height:"350px",
            background:"#fafafa",
            margin:"10px",
            borderRadius:"10px"

        }}>
            <div style={{
                height:"50%",
                width:"100%",
                background:"blue",
                borderRadius:"10px"
            }} >
                <img style={{height:"100%",width:"100%",objectFit:"fill",borderRadius:"10px"}} src={college1} alt="CollegeImage" className="collegeImage"/>
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",}}>
                <h3 > {name}</h3>
                <h4 style={{marginTop:"-15px"}} >{location}</h4>
                <div className="contact-details" style={{marginTop:"-10px"}}>
                <span>{email}</span><br/>
                <span>{phone}</span><br/>
                <span>Rate : 5</span><br/>
              
                <Link to={`/collegedetails/${id}`}>
                <button className="CollegeCard_btn">Details</button>

                </Link>
                </div>
                
                

                
                
               
            </div>
        </div>
    )
}

export default CollegeCard

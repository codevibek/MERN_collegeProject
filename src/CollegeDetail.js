import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import "./CollegeDetails.css"
import {Link} from "react-router-dom"
import ReviewCard from "./ReviewCard"
import CollegeCard from './CollegeCard'
import college1 from './college1.jpg'
import {useHistory} from "react-router-dom"
import Modal from 'react-modal'




const CollegeDetail = ({match}) => {
    const history = useHistory()
    const [inputRating, setInputRating] = useState()
    const [inputReview, setInputReview] = useState("")
    const [collegeDetail,setCollegeDetail]= useState({})
    const [errorMessage, setErrorMessage] = useState("")
    let id = match.params.id
    const u_id = "3"
    

    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)'
        }
      };
       
      Modal.setAppElement('#root')
    useEffect(() => {
        getCollegeDetail()
       
       
    }, [])
     async function getCollegeDetail(){
        await Axios.get(`http://localhost:3001/colleges/${id}`)
        .then((res)=>{
            if (res){
                setCollegeDetail(res.data[0])
            
            }
            
        })
        
    }
    
    const {c_name,
        c_email,
        c_ECA,
        c_facility,
        c_fee,
        c_location,
        c_noofstudents,
        c_pastresult,
        c_phone} = collegeDetail
    
        const [modalIsOpen,setIsOpen] = React.useState(false);
        function openModal() {
          setIsOpen(true);
        }
        function closeModal(){

            const submitRating=async() =>{
                 await Axios.post("http://localhost:3001/rate",{inputRating,inputReview,u_id,id})
                .then(res=>{
                    console.log(res)
                    alert(res.data)})
            }
            submitRating()

           
            setIsOpen(false); 
            
          }
          const rateUs=()=>{
            if (u_id){
                openModal()

            }
            else(
                history.push("/login")
            )
          }
  
    return (
        <div className="collegeDetail" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
             <Modal
          isOpen={modalIsOpen}
          
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <div className="form" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div className="rating">
            <label>Rate</label>
            <input placeholder="0-5"  onChange={(e)=>{
                setInputRating(e.target.value)}} autoFocus type="number" step="0.1" min="0" max="5"/>
           
            </div>
            <div className="reviewing">
            <label>Review</label>
            <textarea onChange={(e)=>setInputReview(e.target.value)}  rows="5" cols="50" maxLength="500"/>
            </div>
           {errorMessage}
           

            
        </div>
          <button onClick={closeModal}>Submit</button>
          
        </Modal>      
                <button onClick={rateUs} className="rate_us">Rate Us</button>
            <div style={{width:"100vw",
            height:"60vh",
            
            }}>
                <img style={{height:"100%",width:"100%",objectFit:"fill"}}  src={college1} alt="college banner" className="College"/>

            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <h1>{c_name}</h1>
                <h3 style={{marginTop:"-15px"}}>{c_location}</h3>
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
                                {c_noofstudents}
                            </div>   
                            <div className="details_detail">
                                {c_pastresult}
                            </div> 
                            <div className="details_detail">
                                {c_ECA} 
                            </div> 
                            <div className="details_detail">
                                {c_fee}
                            </div> 
                            <div className="details_detail">
                                {c_location}
                            </div> 
                            <div className="details_detail">
                                {c_facility}
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
                <span>{c_email}</span>
                <span>Website</span>
                <span>{c_phone}</span>
                <span style={{fontSize:"12px", textAlign:"start"}}>copyright</span>
                
                
            </footer>
        </div>
    )
}

export default CollegeDetail

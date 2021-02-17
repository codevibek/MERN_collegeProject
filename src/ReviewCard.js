import React from 'react'

const ReviewCard = () => {
    return (
        <div className="reviewCard" style={{width:"200px",height:"150px",background:"black",color:"white",padding:"10px",marginLeft:"20px",borderRadius:"30px"}}>
            <h3>Sanjay Adhikari</h3>
            <h4 style={{marginTop:"-15px"}}>Rate:5</h4>
            <p style={{fontSize:"12px",marginTop:"-10px"}}>all the facilities of this college are awesome</p>
        </div>
    )
}

export default ReviewCard

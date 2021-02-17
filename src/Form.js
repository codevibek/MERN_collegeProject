import React from 'react'
import Modal from 'react-modal'

const Form = () => {
    const [name, setName] = useState('')
    const [noOfStudent, setNoOfStudent] = useState(0)
    const [fee, setFee] = useState(0)
    const [location, setLocation] = useState('')
    const [facility, setFacility] = useState('')
    const [pastResult, setPassResult] = useState(0)
    const [eca,setEca] = useState('')
    return (
        <div className="form" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <label>Name</label>
            <input type="text" onChange={()=>setName(e.target.value)}/>

            <label>No of Student</label>
            <input type="number" onChange={()=>setNoOfStudent(e.target.value)}/>
            <label>Fee</label>
            <input type="text" onChange={()=>setFee(e.target.value)}/>
            <label>Location</label>
            <input type="text" onChange={()=>setLocation(e.target.value)}/>
            <label>Facility</label>
            <input type="text" onChange={()=>setFacility(e.target.value)}/>
            <label>passResult</label>
            <input type="number" onChange={()=>setPassResult(e.target.value)}/>
            <label>ECA</label>
            <input type="text" onChange={()=>setEca(e.target.value)}/>

        </div>
    )
}

export default Form

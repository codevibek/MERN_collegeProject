import React,{useState,useEffect} from 'react'
import Axios from 'axios'
import Modal from 'react-modal'
const Dashboard = () => {
    const [name, setName] = useState('')
    const [noOfStudent, setNoOfStudent] = useState(0)
    const [fee, setFee] = useState(0)
    const [location, setLocation] = useState('')
    const [facility, setFacility] = useState('')
    const [pastResult, setPassResult] = useState(0)
    const [eca,setEca] = useState('')
    const [phone,setPhone] = useState()
    const [email, setEmail] = useState("")
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
       
    const [collegeList, setCollegeList] = useState([])
    const [newName, setNewName] =useState('')
    useEffect(() => {
        Axios.get("http://localhost:3001/colleges")
        .then((res)=>setCollegeList(res.data))
        
    }, [collegeList])

   
    
    const updateCollege = (id) =>{
        Axios.put("http://localhost:3001/update",{
          name, 
          noOfStudent, 
          fee, 
          location, 
          facility, 
          pastResult, 
          eca,
          phone,
          email,
          id
        })
        .then(()=> {
            console.log("updated Succesfully")
        })
    }
    const deleteCollege =(id)=> {
        Axios.delete(`http://localhost:3001/delete/${id}`)
    }
    
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [secondIsOpen, setSecondIsOpen] = useState(false)
    function openModal() {
      setIsOpen(true);
    }
    function openSecondModal(){
      setSecondIsOpen(true)
    }
   
  
    const addCollege = () => {
        Axios.post('http://localhost:3001/create',{
            name, 
            noOfStudent, 
            fee, 
            location, 
            facility, 
            pastResult, 
            eca,
            phone,
            email
        }).then(()=>console.log("success"))
    }
    function closeModal(){
      setIsOpen(false); 
      addCollege()
    }
    function closeSecondModal(){
      setSecondIsOpen(false)
      updateCollege()
    }

    return (
        
        <div className="dashboard"id="dashboard" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
             <button onClick={openModal}>Insert College</button>
             <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Fee</th>
                        <th>ECA</th>
                        <th>Location</th>
                        <th>Past Result</th>
                        <th>Facilities</th>
                        <th>No Of Students</th>
                    </tr>
                    {collegeList.map((c,index)=>{
                    return(
                        <tr key={c.c_id}>
                            <td>{index+1}</td>
                        <td>{c.c_name}</td>
                        <td>{c.c_fee}</td>
                        <td>{c.c_ECA}</td>
                        <td>{c.c_location}</td>
                        <td>{c.c_pastresult}%</td>
                        <td>{c.c_facility}</td>
                        <td>{c.c_noofstudents}</td>
                        <td><button onClick={()=>openSecondModal(c.c_id)}>Update</button></td>
                        <td><button onClick={()=>{deleteCollege(c.c_id)}}>Delete</button></td>
                    </tr>
                        
                        )
                })}
                    
                    
                </table>
                <div className="modal">
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <div className="form" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <label>Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>

            <label>No of Student</label>
            <input type="number" onChange={(e)=>setNoOfStudent(e.target.value)}/>
            <label>Fee</label>
            <input type="text" onChange={(e)=>setFee(e.target.value)}/>
            <label>Location</label>
            <input type="text" onChange={(e)=>setLocation(e.target.value)}/>
            <label>Facility</label>
            <input type="text" onChange={(e)=>setFacility(e.target.value)}/>
            <label>passResult</label>
            <input type="number" onChange={(e)=>setPassResult(e.target.value)}/>
            <label>ECA</label>
            <input type="text" onChange={(e)=>setEca(e.target.value)}/>
            <label>Email</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
            <label>Phone</label>
            <input type="number" onChange={(e)=>setPhone(e.target.value)}/>

        </div>
          <button onClick={closeModal}>Add</button>
          
        </Modal>
        <Modal
          isOpen={secondIsOpen}
          onRequestClose={closeSecondModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
            <div className="form" style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
            <label>Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>

            <label>No of Student</label>
            <input type="number" onChange={(e)=>setNoOfStudent(e.target.value)}/>
            <label>Fee</label>
            <input type="text" onChange={(e)=>setFee(e.target.value)}/>
            <label>Location</label>
            <input type="text" onChange={(e)=>setLocation(e.target.value)}/>
            <label>Facility</label>
            <input type="text" onChange={(e)=>setFacility(e.target.value)}/>
            <label>passResult</label>
            <input type="number" onChange={(e)=>setPassResult(e.target.value)}/>
            <label>ECA</label>
            <input type="text" onChange={(e)=>setEca(e.target.value)}/>
            <label>Email</label>
            <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
            <label>Phone</label>
            <input type="number" onChange={(e)=>setPhone(e.target.value)}/>

        </div>
          <button onClick={closeSecondModal}>Update</button>
          
        </Modal>
                </div>
        </div>
    )
}

export default Dashboard

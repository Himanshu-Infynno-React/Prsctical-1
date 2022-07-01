import axios from 'axios'
import {Link} from 'react-router-dom'
import React, { useEffect , useState } from 'react'

function EditEmployee({ editData , setUpdate }) {

    const [editEmp , setEditEmp] = useState({
        first_name: "",
        last_name : "",
        email : ""
    })

    useEffect(()=>{
        setEditEmp(editData)
    } , [])


    function updateEdit() {
        const users = localStorage.getItem('users');
        let temp_users = users.split(', ').map((usr) => JSON.parse(usr));
        temp_users = temp_users.map((emp) => {
            if (emp.id === editEmp.id) {
                console.log("from temp match", emp.id);  
                return editEmp;
            }
            return emp;
        });
        console.log(editEmp, "from temp");    
        console.log(temp_users, "from temp");    
        localStorage.setItem('users', temp_users.map((da)=> JSON.stringify(da)).join(', '));
    }

 
    function handleInputChange(e){
        setEditEmp({...editEmp , [e.target.name]:e.target.value})
        setUpdate(true)
    }

    
    return (
        <>

            <div className="container">
                <div className="row login_box">
                    <div className="col-md-12 col-xs-12" align="center">
                        <div className="outter">
                            <img src={editData.avatar} alt="/" className="image-circle" />
                            </div>
                        <h1>Hi {editEmp.first_name} {editEmp.last_name}</h1>
                    </div>

                    <div className="col-md-12 col-xs-12 login_control">
                        <div className="control">
                            <div className="label">First Name</div>
                            <input type="text" className="form-control" name='first_name'  value={editEmp.first_name} onChange={handleInputChange}/>
                        </div>
                        <div className="control">
                            <div className="label">Last Name</div>
                            <input type="text" className="form-control" name='last_name' value={editEmp.last_name} onChange={handleInputChange}/>
                        </div>
                        <div className="control">
                            <div className="label">Email Address</div>
                            <input type="text" className="form-control" name='email' value={editEmp.email} onChange={handleInputChange} />
                        </div>
                        <div align="center">
                            <Link to='/' ><button className="btn btn-orange" onClick={()=>updateEdit()}>Edit Details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditEmployee

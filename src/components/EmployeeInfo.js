import React, { useState ,useEffect } from 'react'
import axios from 'axios';


function EmployeeInfo({getID}) {

  const [emp , setEmp] = useState([])



  useEffect(()=>{
    const fetchData = async ()=>{
        const url = "https://reqres.in/api/users/"+getID;
        const res = await axios.get(url)
        const data = res.data;
        const daat = data.data;
   
        setEmp(daat)
    }
    fetchData();
  }, [])
  return (
    <>
      <div>
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-12 col-xl-4">
                <div className="card">
                  <div className="card-body text-center">
                    <div className="mt-3 mb-4 ">
                      <img src={emp.avatar} alt="" className='rounded-circle' />
                      </div>
                    <h4 className="mb-2">{emp.first_name} {emp.last_name}</h4>
                    <p className="text-muted mb-4"><a href="#!">{emp.email}</a></p>
                    <div className="mb-4 pb-2">
                      <button type="button" className="m-1 btn btn-outline-primary btn-floating">
                        <i className="fab fa-facebook-f fa-lg"></i>
                      </button>
                      <button type="button" className="m-1 btn btn-outline-primary btn-floating">
                        <i className="fab fa-twitter fa-lg"></i>
                      </button>
                      <button type="button" className="m-1 btn btn-outline-primary btn-floating">
                        <i className="fab fa-skype fa-lg"></i>
                      </button>
                    </div>
                    <button type="button" className="btn btn-primary btn-rounded btn-lg">
                      Message now
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  )
}

export default EmployeeInfo

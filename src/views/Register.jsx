import React from 'react'
import {useNavigate , Link} from 'react-router-dom'

function Login() {
  return (
    <div>
      <div style={{height:'75px'}}></div>
      <main>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3">
              <div className="d-flex align-items-center d-lg-none">
                <div className="card">
                  Login
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login
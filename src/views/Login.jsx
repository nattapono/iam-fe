import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
// import * as API from '../@api/auth'

function LoginForm() {
  const [email, setEmail] = useState('');
  const [emailErr, setemailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [password, setPassword] = useState('');
  let navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email == '') {
      setemailErr(true)
    }else if(!password || password == '') {
      setPassErr(true)
      setemailErr(false)
      return false;
    }
    const payload = { 
      username: email,
      password:password,
    }
  
      try {
          setPassErr(false)
          // const response = await API.auth.login(payload);
          // const access_token = response.data.access_token;
          localStorage.setItem('X-Token', JSON.stringify(payload));
          //  const personal = await API.auth.profileCurrent();
          //  localStorage.setItem('X-personal',personal);
          setTimeout(() => {
            if(window.location.href=='/login') {
              window.location.href = "/dashboard";
            }else{
              window.location.href = window.location.href;
            }
          }, 800);
       
      } catch (error) {
        console.log('error',error);
      }
  }

  return (
    <div className="row justify-content-center d-flex align-items-center mt-6" style={{height:'100vh'}}>
      <div className="col-xl-3 col-lg-4 col-md-6 col-12 mx-auto">
        <div className="card z-index-0">
          <div className="card-header text-center pt-4 pb-0">
            <h5>
            <span style={{color:'rgb(247, 153, 183)',letterSpacing: '1px',filter: 'drop-shadow(1px 1px 1px #999)'}}>เข้าสู่ระบบ <span style={{color:'rgba(247, 255, 0, 0.83)'}}>Friend</span>Ship</span><br />
            </h5>
          </div>
          <div className="card-body">
            <form role="form"
             onSubmit={handleSubmit}
            >
              <div className="mb-3">
                <label id="user-error" className="form-check-label d-none text-danger">กรุณากรอก Username</label>
                <img src="./src/assets/icons/mail.svg" alt="" className="icon-search " />
                <input type="email" value={email} className="form-control" placeholder='example@domain.com' onChange={(e) => setEmail(e.target.value)} />
                {emailErr ? (
                  <p className="text-danger small">
                    กรุณากรอกรอีเมล
                  </p>
                ):null}
              </div>
              <div className="mb-3">
                <label id="pass-error" className="form-check-label d-none text-danger">กรุณากรอก Password</label>
                <img src="/vector.svg" alt="" className="icon-search " />
                <input type="password" className="form-control" value={password} placeholder="กรอกรหัสผ่าน" onChange={(e) => setPassword(e.target.value)}
                  style={{fontFamily: 'monospace'}}
                />
                 {passErr ? (
                  <p className="text-danger small">
                    กรุณากรอกรหัสผ่าน
                  </p>
                ):null}
              </div>
              <div className="text-center">
                <p id="login-error" className="d-none text-danger">  </p>
                <button type="submit" className="btn bg-dark w-100 my-4 mb-2 text-white" >เข้าสู่ระบบ</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginForm
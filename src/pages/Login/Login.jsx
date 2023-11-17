// import { useState } from "react";
import { useContext } from "react";
// import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {

  // const [disabled,setDisabled]=useState(true)
  const {signin}=useContext(AuthContext)

    // useEffect(()=>{
    //     loadCaptchaEnginge(6)
    // },[])

  const handleLogin=(event)=>{
    event.preventDefault()
    const form=event.target 
    const email=form.email.value 
    const password=form.password.value 
    console.log(email,password);

    signin(email,password)
    .then(result=>{
      console.log(result);
    })
    .catch(error=>{
      alert(error.message);
    })

  }

  // const handleCaptcha=(event)=>{
  //   const userCaptchaValue=event.target.value 
  //   setDisabled(!validateCaptcha(userCaptchaValue))
  // }

    return (
        <div>

        

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        {/* <div className="form-control">
          <label className="label">
           <LoadCanvasTemplate/>
          </label>
          <input onBlur={handleCaptcha} type="text" placeholder="Fill in the captcha" className="input input-bordered" required />
          
        </div> */}
        <div>
            <Link to="/register" >Register</Link>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;
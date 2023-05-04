import React, { useContext, useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';
import Swal from 'sweetalert2'

// const Swal = require('sweetalert2')
const Registration = () => {
 const {createRegister}=useContext(AuthContext)


  const  handlerRegister= (e)=>{
    e.preventDefault()
        const form = e.target;
        const name = form.name.value
        const email = form.email.value;
        const password =form.password.value;
        // console.log(name,email, password);

        if(password.length < 6){
          // setError('password must be at least 8 characters or long ');
          return Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'password must be at least 6 characters or long!',
          })
        }
        
      

      if(email,password){
        createRegister(email,password)
        .then((result)=>{
            console.log(result.user);
            form.reset("")
            return Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 2000
            })
            
        })
        .catch(error=>{
            console.log(error);
            
        })
      }
        
  }
    return (
        <div className="hero min-h-screen bg-base-200 "style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp9764014.jpg")`}}>
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold ">Please Register </h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <Form onSubmit={handlerRegister} className="card-body"style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp9764014.jpg")`}}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl text-white">Name</span>
                </label>
                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered w-80" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl text-white">Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-80 text-xl text-black" required/>
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text font-bold text-white text-xl">Password</span>
                </label>
                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-80" required/>
                
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text text-xl text-white font-bold">Photo Url</span>
                </label>
                <input type="text" name="name" placeholder="Enter your url" className="input input-bordered w-80 " required/>
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p className='link text-white'><Link to="/login">Already have an account? Login</Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    );
};

export default Registration;
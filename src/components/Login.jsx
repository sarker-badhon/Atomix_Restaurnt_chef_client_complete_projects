import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from './Provider/AuthProvider';
import { FaGooglePlus,FaGithubAlt } from 'react-icons/fa';

const Login = () => {
    const {signInUser,googleLogIn,githubLogIn}=useContext(AuthContext)
 const handlerLogin =(e)=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password =form.password.value;
    // console.log(name,email, password);

    signInUser(email,password)
    .then((result)=>{
        const signInUser =result.user
        console.log(signInUser);
        form.reset("")
    })
    .catch(error=>{
        console.log(error);
    })


 }

 const googleSignIn=()=>{
    googleLogIn()
    .then((result)=>{
        const signInUser =result.user
        console.log(signInUser);
    })
    .catch(error=>{
        console.log(error);
    })
 }

 const githubSignIn=()=>{
    githubLogIn()
    .then((result)=>{
        const signInUser =result.user
        console.log(signInUser);
    })
    .catch(error=>{
        console.log(error);
    })
 }


    return (
        <div className="hero min-h-screen bg-base-200"style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp9764014.jpg")`}}>
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold ">Please Login </h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <Form onSubmit={handlerLogin} className="card-body"style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp9764014.jpg")`}}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl text-white">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered w-80" />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text font-bold text-xl text-white">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered " required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover font-bold text-xl text-white">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                
                <p className='link text-white mt-4'><Link to="/registration">create new account ?register</Link>
              </p>
            <div className='flex mx-auto m-2'>

                <button onClick={googleSignIn} className="btn btn-outline text-white mt-3 mr-3"> <FaGooglePlus className='h-8 w-8 mr-2'></FaGooglePlus> Google </button>
                <button onClick={githubSignIn} className="btn btn-outline text-white mt-3 mr-3"> <FaGithubAlt className='h-8 w-8 mr-2'></FaGithubAlt> Github </button>
                
            </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
};

export default Login;
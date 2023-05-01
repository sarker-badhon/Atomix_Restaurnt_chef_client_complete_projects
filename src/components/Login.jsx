import React from 'react';

const Login = () => {
    return (
        <div className="hero min-h-screen bg-base-200"style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp9764014.jpg")`}}>
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold ">Please Login </h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body"style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp9764014.jpg")`}}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered w-60" />
              </div>
              <div className="form-control">
                <label className="label ">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;
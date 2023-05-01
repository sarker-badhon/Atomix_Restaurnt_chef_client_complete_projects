import React from 'react';

const Registration = () => {
    return (
        <div className="hero min-h-screen bg-base-200 "style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp9764014.jpg")`}}>
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold ">Please Register </h1>
           
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
            <div className="card-body"style={{ backgroundImage: `url("https://wallpapercave.com/wp/wp9764014.jpg")`}}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl text-white">Name</span>
                </label>
                <input type="text" name="name" placeholder="Enter your name" className="input input-bordered w-80" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl text-white">Email</span>
                </label>
                <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-80 text-xl text-white" />
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
                <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-80 " required/>
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Registration;
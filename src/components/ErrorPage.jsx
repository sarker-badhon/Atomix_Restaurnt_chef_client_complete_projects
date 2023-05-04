import React from 'react';

const ErrorPage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
      <img src="https://blog.thomasnet.com/hs-fs/hubfs/shutterstock_774749455.jpg?width=600&name=shutterstock_774749455.jpg" alt="Page not found" className="w-64 h-64 mb-8" />
      <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg">The page you are looking for does not exist.</p>
    </div>
    );
};

export default ErrorPage;
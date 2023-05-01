import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-red-500 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold">
              Oops! Something went wrong.
            </h2>
          </div>
          <div className="mt-8">
            <div className="text-center">
              <p className="text-base font-medium">
                Please try again later or contact support if the problem persists.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ErrorPage;
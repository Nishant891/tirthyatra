import React from "react";

const Landing = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl w-full space-y-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white">
          Join with us on a
          <strong className="block font-extrabold text-rose-500 mt-2">
            Spiritual Journey
          </strong>
        </h1>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+918927890345"
            className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          >
            ✆ +91 8927890345
          </a>
          <a
            href="#"
            className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-rose-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          >
            🗓️ View Schedule
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;


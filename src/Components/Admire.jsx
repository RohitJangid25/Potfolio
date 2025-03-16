import React from 'react'

const Admire = () => {
  return (
    <section className="bg-black text-white py-10 px-6 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-purple-400">Things I Admire</h2>

      {/* Grid Layout */}
      <div className="grid gap-6 mt-8 px-4 md:px-10 lg:px-20 
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        
        {/* Card Items */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Know your User</h3>
          <p className="text-gray-300 text-sm mt-2">
            Start with user needs. Treat second-hand information about users with caution. 
            Focus on user outcomes and design with data.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Clarity</h3>
          <p className="text-gray-300 text-sm mt-2">
            Create structure and hierarchy. Give users responses to the actions they take. 
            Make decisions easy by avoiding paradox of choice.
          </p>
        </div>

        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Consistency</h3>
          <p className="text-gray-300 text-sm mt-2">
            Avoid uniformity, but be consistent. Re-use well-tested design patterns. 
            Use ubiquitous language to create familiarity.
          </p>
        </div>

        {/* Centered Cards as Horizontal Line */}
        <div className="flex justify-center gap-6 col-span-1 sm:col-span-2 lg:col-span-3">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md w-full sm:w-[48%]">
            <h3 className="text-lg font-semibold">Effectiveness</h3>
            <p className="text-gray-300 text-sm mt-2">
              Your design should work everywhere; responsive is not only screen size. 
              Leverage technology to help users.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md w-full sm:w-[48%]">
            <h3 className="text-lg font-semibold">Aesthetics</h3>
            <p className="text-gray-300 text-sm mt-2">
              Accessibility is not a bolt-on feature. First impressions do matter. 
              Take the extra time to delight your users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admire;
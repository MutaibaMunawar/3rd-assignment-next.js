import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg"> 
      <form>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-yellow-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-yellow-500 text-white font-semibold py-3 rounded hover:bg-yellow-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

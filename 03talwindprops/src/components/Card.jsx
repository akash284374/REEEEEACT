import React from 'react'

// function Card(props) {
function Card({username,btnText="aka"}) {
    console.log(username);
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden mt-6">
      <img
        className="w-full h-48 object-cover"
        src="https://source.unsplash.com/400x300/?train"
        alt="Train"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{username}</h2>
        <p className="mt-2 text-gray-600 text-sm">
          This card shows a random train image using Tailwind CSS styling.
        </p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card
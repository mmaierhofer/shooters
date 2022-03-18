import React from "react";

export default function Searchbar() {
  return (
    <>
      <div>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-h-20">
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
        </form>
      </div>
    </>
  );
}

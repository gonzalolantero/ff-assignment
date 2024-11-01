import React from 'react';

function Header({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex justify-between items-center p-4 bg-neutral-900 text-neutral-200">

      <input
        type="text"
        placeholder="Search player..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 rounded bg-neutral-700 text-neutral-200 focus:outline-none ml-4"
      />

      <img
        src="https://forward.football/wp-content/uploads/2019/01/ff-logo-1-red-xs.png"
        alt="Company Logo"
        className="h-14 mr-4"
      />
    </div>
  );
}

export default Header;

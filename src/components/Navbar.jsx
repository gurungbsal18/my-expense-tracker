import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto py-4">
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold">My Expense Tracker</p>
        <ul className="flex items-center gap-8">
          <li>Home</li>
          <li>About us</li>
          <li className="flex gap-4">
            <button>Login</button>
            <button>Sign up</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

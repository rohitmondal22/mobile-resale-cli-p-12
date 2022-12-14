import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Context/Usercontext";


const NaveBar = () => {
  const { user, auth } = useContext(Authcontext);


  const handelsignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((e) => {
        
      });
  };

  const naveitems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/dasbord">DasBord</Link>
      </li>

      {user?.uid ? (
        <li onClick={handelsignout}>
          <Link>Sign Out</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}

   
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
           <img src='https://i.ibb.co/5Wznsnx/reseler-removebg-preview.png' alt="" />
          </Link>
        </div>

        <div className="navbar-end">
          {/* lg divise */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{naveitems}</ul>
          </div>

          {/* hambarger manue */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {naveitems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaveBar;

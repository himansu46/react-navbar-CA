import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <div
      style={{ width: "100%", height: "45px", backgroundColor: "chocolate" }}
    >
      <center>
       
        <button>
          <Link className="link" to="/">
            Home
          </Link>
        </button>
        <button>
          <Link className="link" to="/signup">
            SignUp
          </Link>
        </button>
        <button>
          <Link className="link" to="/login">
            LogIn
          </Link>
        </button>
        <button>
          <Link className="link" to="/about">
            About
          </Link>
        </button>
        <button>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </button>
        <button>
          <Link className="link" to="/blogs">
            Blogs
          </Link>
        </button>
      </center>
    </div>
  );
}
export default NavBar;

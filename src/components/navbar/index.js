
import SignUp from '../signUp'
import Login from '../login'
import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      NavBar
      <div style={{ border: "2px solid red", margin: "1rem" }}>
        <container >
          <h3><Link to="/"> E Commerce</Link>
          </h3>
          <input type='text' placeholder='search' style={{ marginLeft: "5rem" }} />
          <button><Link to="/login"> Login</Link>
          </button>
          <button><Link to="/signUp"> SignUp</Link>
          </button>
          <button><Link to="/cart"> Cart</Link>
          </button>
        </container>
      </div>


    </div>
  )
}

export default Navbar

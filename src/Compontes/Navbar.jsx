import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="d-flex  flex-row align-items-center p-3 
    px-4 mb-3 bg-white border-bottom border-primary">
  <h5 className="my-0  font-weight-normal">Company name</h5>
  <nav className="my-2  ms-auto mr-3">
    <Link to="features" className="p-2 text-dark">Features</Link>
    <Link to="enterprice" className="p-2 text-dark">Enterprise</Link>
    <Link  to="support" className="p-2 text-dark">Support</Link>
    <Link  to="/" className="p-2 text-dark">Pricing</Link>

  </nav>
  <Link className="btn btn-outline-primary">Sign up</Link>

</div>
  )
}

export default Navbar
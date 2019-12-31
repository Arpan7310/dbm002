import React from 'react'

function Navbar() {
    return(
         <nav>
           <div class="navbar-fixed">
    <div class="nav-wrapper   purple lighten-1 ">
      <a href="#" class="brand-logo">Database</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/Addnew">Add Product</a></li>
        <li><a href="/Card2">View Records</a></li>
        
        <li><a href="/Card3">Search Records</a></li>
      </ul>
    </div>
    </div>
  </nav>
    )
}

export default Navbar;
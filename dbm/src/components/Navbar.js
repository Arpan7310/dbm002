import React ,{Component} from 'react'
import M from 'materialize-css'
class Navbar extends Component {

componentDidMount(){
  M.AutoInit();
}



  render(){
    return(
      <div>
         <nav>
           <div class="navbar-fixed">
    <div class="nav-wrapper   purple lighten-1 ">
      <a href="#!" class="brand-logo">Database</a>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/">Home</a></li>
        <li><a href="/Addnew">Add Product</a></li>
        <li><a href="/Card2">View Records</a></li>
        
        <li><a href="/Card3">Search Records</a></li>
      </ul>
    </div>
    </div>
  </nav>
  <ul class="sidenav" id="mobile-demo">
    <li><a href="/">Home</a></li>
    <li><a href="/Addnew">Add Product</a></li>
    <li><a href="/Card2">View Product</a></li>
    <li><a href="/Card3">Search Records</a></li>
  </ul>




  </div>
    )
}
}

export default Navbar;
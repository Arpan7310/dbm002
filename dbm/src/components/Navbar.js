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
    
      <a href="#!" class="brand-logo centre">Database</a>
      
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">view_headlineg</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="/"> Add Transaction Details</a></li>
      
       
        
        <li><a href="/Card3">View/Search Records</a></li>
      </ul>
    </div>
    </div>
  </nav>
  
  <ul class="sidenav" id="mobile-demo">
    <li><a href="/"> Add Transaction Details</a></li>
    
    
    <li><a href="/Card3">View/Search Records</a></li>
  </ul>




  </div>
    )
}
}

export default Navbar;
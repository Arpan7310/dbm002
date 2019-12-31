import React,{Component} from 'react'
import AddProduct from './AddProduct'
import M from 'materialize-css'

import axios from 'axios'

class Form extends Component{
constructor(props) {
    super(props);
     this.state = {
       "sname":"",
       "stag":"",
    "noitems":"",
    "tdesc":"",
    "date":"",
   "radio":"",
   
   }
   this.date=React.createRef();
   
 }
    componentDidMount(){
   var context=this;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.datepicker');
       M.Datepicker.init(elems, {
         onClose:context.handleDate,
         format:"dd-mm-yyyy"
       });
    });
   }
    handleChangetdesc = (e) =>{
      this.setState({
         tdesc:e.target.value
         })
         
     }
     
handleChangenoitems = (e) => {
   this.setState({
   noitems:e.target.value  })
     }
 handleDate = (e) => {

   this.setState({
        date:this.date.current.value
      })}
 handleClickRadio = (e) => {
   
   this.setState({
       radio:e.target.value
   })
  
}
    handleSubmit = (e) => {
       axios.post('http://localhost:1000/savedata',this.state).then((data)=>{
        console.log(data);
        alert("data is saved");
       
      })}
   handleClicks =(e) => {
  
     this.setState({
        sname:e.label,
        stag:e.value
       })}
      render() {
       console.log("data is ",this.state)
       return(
          <div>
        <div class="row">
        <div class="col  l4 s12 m5"></div>
        <div class="col l4">
         <div class="card-panel bisque">
         <AddProduct  handleClicks={this.handleClicks}/>
        <input type="text" onChange={this.handleChangenoitems}/>
        <label><strong>No of items</strong></label>
        <input class="validate" type="text" onChange={this.handleChangetdesc}/>
        <label><strong>Transaction Description</strong></label>
        <input type="text" class="datepicker"  id="datepicker" ref={this.date} />
        <label><strong>Enter date</strong></label>
         <p>
         <label><input name="group1" type="radio" id="radio" value="incoming" onClick={this.handleClickRadio}  /><span>Incoming</span></label>
         </p>
         <p>
      <label> <input name="group1" type="radio" id="radio" value="outgoing" onClick={this.handleClickRadio}  /><span>Outgoing</span> </label></p>
        <div class="sn">
        <a class="waves-effect waves-light btn " href="/Addnew">Add New Item</a>
        <a class="waves-effect waves-light btn " disabled={ !this.state.noitems.trim() 
        || !this.state.tdesc.trim()
        || !this.state.radio.trim()
        || !this.state.sname.trim()
        || !this.state.date.trim()
         } onClick={this.handleSubmit}>Submit</a>
        </div>
         </div>
       </div>
      </div>
   </div>
            
   

        )
    }
}

export default  Form
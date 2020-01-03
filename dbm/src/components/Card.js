import React , {Component} from 'react';
import axios from 'axios';

 class Card extends Component{

constructor(props) {
  super(props);
 
  this.state ={
   value:"",
   label:""

  }
}



handleChangename =(e) =>{
 console.log(this.state.name)
  this.setState({
    label:e.target.value
    })
}

handleChangetext =(e) => {
  console.log(this.state.text)
  this.setState({
    value:e.target.value  })
    }

handleClick = (e) => {
  axios.post('https://kio9.herokuapp.com/savedata2',this.state).then((data)=>{
    console.log(data);
    alert("data is saved");
  })

  }

   render(){
    return(<div>

       <form >
      <div class="row">
    <div class="col l4 s12 m5"></div>
    
      <div class="col l4">
      <div class="card-panel " id="prop">
       <div class="input-field">
       
      <input type="text" id="name" onChange={this.handleChangename}/>
      <label class="validate" for="name"><strong>Name</strong></label>
      </div>
      <div class="row"></div>
      <div class="input-field">
        <input type="text"  id="type" onChange={this.handleChangetext}  />
        <label class="validate"  for="type"><strong>Type</strong></label>
        </div>
        <div class="row"></div>
        <a class="waves-effect waves-light btn-small" onClick={this.handleClick} disabled={!this.state.label.trim()
        || !this.state.value.trim()
        } >Submit</a>
        
        </div>
      </div>
    </div>
    </form>
   </div>
    )
   }
 }

 export default Card;
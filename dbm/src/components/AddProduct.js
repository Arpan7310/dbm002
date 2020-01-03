import React, {Component} from 'react';
import M from 'materialize-css'
import Axios from 'axios';
import Select from 'react-select';
 

class AddProduct extends Component{
  constructor(props) {
        super(props);
       this.state ={
        "array":[],
        
      }
   
    }
   componentDidMount= ()=>{
  M.AutoInit();
   Axios.get('https://kio9.herokuapp.com/getdata2',{}).then((a)=>{
   
   
   
       this.setState({
            "array":a.data.map((y)=>{
              return(y)
            })
             })
         
})

}
   render(){
  
        return( 
     <div>
    <Select 
    onChange={this.props.handleClicks}
    options={this.state.array} 
    
    />
    </div>
        )
      }
  }
        
  
       
export default AddProduct
import React, {Component} from 'react'
import Axios from 'axios';


class Card2 extends Component {

constructor(props) {
    super(props);
  
    this.state ={
       "array":[],
       "b":[]
       
    }
}

componentDidMount(){
    Axios.get('http://localhost:1000/getdata',{}).then((a)=>{

   console.log("bobo is",a);
        this.setState({
            "array":a.data,
            
        })

    })
    
}





   

  render(){
    
    let y = this.state.array.sort((a, b) => new Date(...a.date.split('-').reverse()) - new Date(...b.date.split('-').reverse()));
     
        console.log("x is ",y)
return(
    <div>
      
    <table  class="card-panel   centered "  >
        <thead class="brown-text hoverable fixed"  >
          <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Number of items</th>
              <th>Date</th>
              <th>Status</th>
              <th>Remarks</th>
          </tr>
        </thead>
 
 
      {y.map((el)=>{
         
          return  (

        <tbody class="brown-text  hoverable" >
          <tr >
            <td ><strong>{el.sname}</strong></td>
            <td><strong>{el.stag}</strong></td>
            <td><strong>{el.noitems}</strong></td>
            <td><strong>{el.date}</strong></td>
            <td><strong>{el.radio}</strong></td>
            <td><strong>{el.tdesc}</strong></td>
            
          </tr>
          
        </tbody>
     
          )
                 }
                )
                 }
                 </table>    
         
      
    

     </div>
    )
}

    
}

export default Card2;
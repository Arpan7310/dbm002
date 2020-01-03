import React ,{Component} from 'react'
import axios from 'axios'
import Select from 'react-select';


class Card3 extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            array1:[],
            array2:[]
            
        }
    this.handleChange=this.handleChange.bind(this);
    this.handleClick=this.handleClick.bind(this);
    }

    handleClick = (e) =>{


 axios.post('https://kio9.herokuapp.com/savedata3',this.state).then((a)=>{
    
          console.log("ota",a)
          this.setState({
            array1:a.data.x
        })
    })

}




    

    handleChange =(e) =>{
      this.setState({
       name:e.label
      })
    }
componentDidMount(){
    axios.get('https://kio9.herokuapp.com/getdata2',{}).then((a)=>{
   
   
   
       this.setState({
            "array2":a.data.map((y)=>{
              return(y)
            })
             })
         
})
axios.get('https://kio9.herokuapp.com/getdata',{}).then((a)=>{
    
  console.log("mukherjee is",a)
 
  this.setState({
    array1:a.data
})
})


}


         


    render(){
      let y = this.state.array1.sort((a, b) => new Date(...a.date.split('-').reverse()) - new Date(...b.date.split('-').reverse()));
      
        return(
          <div>
         
             <div class="card-panel ">
             <div class="row">
              
          <div class="col m7 s7 l7">  <Select 
                 onChange={this.handleChange}
                  options={this.state.array2} 
                
                />
                </div>
                <div class="col   m7 s7 l2">
             <a class="btn waves-effect "  onClick={this.handleClick}>Search </a></div>
             <div class="col   m3 s2 l3"><a class="btn waves-effect "  href="/Card3">Show all</a></div>
             
                </div>
                
              </div> 
              
            <table  class="card-panel  yu "  >
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
         
          return(

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

export default Card3
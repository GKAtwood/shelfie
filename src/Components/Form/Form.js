import React, {Component} from 'react';



// methods handle change (one for each input)  post new product to Database, clear input boxes


class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            name: "",
            price: 0,
            imgurl: "",
            
        }
        this.handleChange = this.handleChange.bind(this);
        this.clearInput =this.clearInput.bind(this);
    }
        
       

    //     <label>
    //     Is going:
    //     <input
    //       name="isGoing"
    //       type="checkbox"
    //       checked={this.state.isGoing}
    //       onChange={this.handleInputChange} />
    //   </label>

  
    handleChange (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
      }

    

     
     

    render(){
        

        return(
            <div>
                <section>
        <label>Image URL:</label>
        <input type="text" 
                 name= "imgurl" onChange={this.handleChange}/>
        <label>Product Name:</label>
        <input type ="text" 
                 name="product" onChange={this.handleChange}/>
        <label>Price:</label>
        <input type ="number"
                 name="price" onChange={this.handleChange}/>
            <button>Cancel</button>
            <button>Add to Inventory</button>
            </section>


            </div>

        )
    }
}

export default Form
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
        this.baseState = this.state 
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePrice =this.handleChangePrice.bind(this);
        this.onImageChange = this.onImageChange.bind(this);
       
        
    }
        
       

    //     <label>
    //     Is going:
    //     <input
    //       name="isGoing"
    //       type="checkbox"
    //       checked={this.state.isGoing}
    //       onChange={this.handleInputChange} />
    //   </label>

  
    handleChangeName (evt) {
        this.setState({ [evt.target.name]: evt.target.value });
      }

      handleChangePrice (evt) {
        this.setState({ [evt.target.price]: evt.target.value });
      }

      resetForm = () => {
        this.setState(this.baseState)
      }

      onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          this.setState({
            image: URL.createObjectURL(event.target.files[0])
          });
        }
       }

    

     
     

    render(){
        

        return(
            <form>
                <section>
                <img src={this.state.image} alt="Product Image"/>
                <br/>
        <label>Image URL:</label>
        <input type="file"  initialValue="" onChange={this.onImageChange}/>
        <label>Product Name:</label>
        <input type ="text" 
                 initialValue="" onChange={this.handleChangeName}/>
        <label>Price:</label>
        <input type ="number"
                 initialValue=""onChange={this.handleChangePrice}/>
            <button onClick={this.resetForm}>Cancel</button>
            <button>Add to Inventory</button>
            </section>


            </form>

        )
    }
}

export default Form
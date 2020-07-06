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

    componentDidUpdate(prevProps, prevState) {
        if (prevState.products !== this.state.products) {
          console.log('This has changed!')
        }
      }

 
    
       
  
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
       console.log(this.props)

        return(
           
            <form className ="Form">
                <section>
                <img src={this.state.image} alt="Your Product Here"/>
               
        <label>Image URL:
            <input type="file"   onChange={this.onImageChange}/>
        </label>
        <label>Product Name:
            <input type ="text"  
                  onChange={this.handleChangeName}/>
         </label>
        <label>Price:
            <input type ="number" 
                 onChange={this.handleChangePrice}/>
            </label>
            <button onClick={this.resetForm}>Cancel</button>
           
            <button  onClick={this.addProduct}>Add to Inventory</button>
            </section>


            </form>

            

        )
    }
}

export default Form
import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import routes from './routes';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';





class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
     
    }
    // this.getInventory = this.getInventory.bind(this);
    this.deleteProduct =this.deleteProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
    this.addProduct = this.addProduct.bind(this);
    
   
  }

  // componentDidMount(){
  //   this.getInventory();
  // }

  // getInventory = () => {    
  //   axios.get('/api/inventory')
  //   .then(res => this.setState({products: res.data}))
  //   .catch(err => console.log(err))
  // }

  deleteProduct = () => {
    axios.delete(`/api/product/${this.props.products.product_id}`)
    .then(() => this.props.getInventory())
    .catch(err => console.log(err))
}
  editProduct = () => {
  axios.put(`/api/product/${this.props.product.product_id}`, {productName: this.state.nameInput}, {productPrice: this.state.priceInput}, {productImg: this.state.imgInput})
  .then(() => this.props.getInventory())
  .catch(err => console.log(err))
}

addProduct = () => {
  axios.post('/api/product', {productName: this.state.name, productPrice: this.state.price, productImg: this.state.imgurl})
  .then(() => this.getInventory())
  .catch(err => console.log(err))
}

  

   



render(){
    console.log(this.state)
  
  
   return(
    <div className="App">
      <Header />
        {routes}
      {/* <Dashboard productList={this.state.products} inventoryFn= {this.getInventory} deleteFn ={this.deleteProduct} editFn={this.editProduct}/> */}
      {/* <Form inventoryFn= {this.getInventory} addFn ={this.addProduct} /> */}
  

      </div>
    

         

        
          

    
     
      );
    }
}


export default App;





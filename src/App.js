import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
     
    }
    this.getInventory = this.getInventory.bind(this);
    this.deleteProduct =this.deleteProduct.bind(this);
   
  }

  componentDidMount(){
    this.getInventory();
  }

  getInventory = () => {    
    axios.get('/api/inventory')
    .then(res => this.setState({products: res.data}))
    .catch(err => console.log(err))
  }

  deleteProduct = () => {
    axios.delete(`/api/product/${this.props.products.product_id}`)
    .then(() => this.props.getInventory())
    .catch(err => console.log(err))
}
   



render(){
    console.log(this.state)
  
  
   return(
    <div className="App">
      <Header />

      <Dashboard productList={this.state.products} inventoryFn= {this.getInventory} deleteFn ={this.deleteProduct}/>
      <Form inventoryFn= {this.getInventory} />

      </div>
    

         

        
          

    
     
      );
    }
}


export default App;





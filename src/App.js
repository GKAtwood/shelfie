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
   
  }

  componentDidMount(){
    this.getInventory();
  }

  getInventory = () => {    
    axios.get('/api/inventory')
    .then(res => this.setState({inventory: res.data}))
    .catch(err => console.log(err))
  }
   








  render(){
    console.log(this.state)
    
   
  
   return(
    <div className="App">
      <Header />
      <div>

         
{/*       
    {this.state.products.map((item)=>(<Dashboard item={item} inventoryFn={this.getInventory}/>))} */}
    {/* {this.state.products.map(product => (
            <li key={product.product_id} product={product} inventoryFn={this.getProducts}></li>
          ))} */}
       <Dashboard productList={this.state.inventory}/>
        
          </div>

    <Form />
      </div>
      );
    }
}


export default App;





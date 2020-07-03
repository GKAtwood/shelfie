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
    return(
    <div className="App">
      <Header />
      {/* {this.state.products.map((item)=>(<Dashboard item={item}/>))} */}
      {this.state.products.map(products => (
            <Dashboard key={products.id} products={products} inventoryFn={this.getInventory}/>
          ))}

      {/* <Dashboard /> */}
      <Form />
      </div>
      );
    }
}


export default App;





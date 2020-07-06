import React, { Component } from 'react';
import Product from '../Product/Product'
import Form from '../Form/Form';
import axios from 'axios';



////no state///no methods

export default class Dashboard extends Component{
    constructor(props){
        super(props)
        this.state={
            products:[],
        }

        this.getInventory = this.getInventory.bind(this);
    }

    componentDidMount(){
        this.getInventory();
      }

      getInventory = () => {    
        axios.get('/api/inventory')
        .then(res => this.setState({products: res.data}))
        .catch(err => console.log(err))
      }

    render(){
        console.log(this.state)
    const productList = this.state.products.map((item) => <div key={item.id}> {item.product_name}{item.price}{item.img}</div>);

        return(
            <div>
            <section className ='product-box' >

{this.state.products.map(function(item) {
return (<li key={item.id}> <br/>{item.product_name}<br/>{item.price}<br/>{item.img}</li>)
})}
    <button>Edit</button>
    <button>Delete</button>
                
                    
            </section>

             <Form inventoryFn= {this.getInventory} addFn ={this.addProduct} />
            </div>

         

        )
    }

}
// const Dashboard = (props) => {
//     console.log(props)
   

//     const mappedProducts = props.productList.map(item =>{
//         console.log(item)
//         return(
            
//             <div key={item.id}>
//                 <h2>{item.product_name}</h2>
//                 <h3>{item.price}</h3>
//                 <h4>{item.img}</h4>
                
//             </div>
           
           
//              )
//     })

//  return(

// <div className = "Dashboard">
//         <h1>Dashboard</h1>
//         <Product list = {mappedProducts} deleteFn ={props.deleteProduct} inventoryFn= {props.getInventory} editFn ={props.editProduct}/>

        
        
        
        

// </div>
//     )
// }

// export default Dashboard
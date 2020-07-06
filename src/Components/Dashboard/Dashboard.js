import React, { Component } from 'react';
import Product from '../Product/Product';
import './dashboard.css';
import axios from 'axios'

class Dashboard extends Component {
	constructor(){
		super()
		this.state={
			products:[]
		}
	}
	componentWillMount() {
		this.getItemList();
	}
	componentDidUpdate(){
		this.getItemList()
	}
	getItemList() {
		axios.get('/api/inventory').then((response) => {
			this.setState({ products: response.data });
		});
	}
	render() {
		const list = this.state.products.map((product, index) => {
			return (
				<Product
					getItemList={()=>this.getItemList()}
					currentProduct={product}
					key={index}
				/>
			);
		});
		return <div>{list}</div>;
	}
}
export default Dashboard;

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
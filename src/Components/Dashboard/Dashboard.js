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
	componentDidMount() {
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
        // console.log(this.state)
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


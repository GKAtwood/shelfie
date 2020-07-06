import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "",
			price: "",
			image_url: "",
      currentId: null,
            
		};
	}
	componentDidMount(props) {
		if (this.props.match.params.id) {
            axios.get('/api/inventory/'+this.props.match.params.id)
            .then(response=> {
                this.setState({
                    name: response.data[0].name,
                    price: response.data[0].price,
                    image_url:response.data[0].image_url,
                    currentId:response.data[0].product_id
                })
            })
		}
         
    }
    componentDidUpdate(props){
        if(props.match.params.id !== this.props.match.params.id){
            this.setState({
                product_name: "",
			          price: "",
			          img: "",
                currentId: null,
            })
        }
    }
   
	handleChange(event, name) {
		const value = event.target.value;
		this.setState({ [name]: value });
	}
	
	addItem() {
		const newItem = {
			product_name: this.state.product_name,
			price: this.state.price,
			img: this.state.img
		};

		axios.post('/api/inventory', newItem).then(() => {
			
		});
	}
	updateItem() {
		const editedItem = {
			product_name: this.state.product_name,
			price: this.state.price,
			img: this.state.img
		};

		axios.put('/api/inventory/' + this.state.currentId, editedItem).then(() => {
		});
	}
	render() {
		const addOrUpdate = this.state.currentId ? (
			<button onClick={() => this.updateItem()}>Save Changes</button>
		) : (
			<button onClick={() => this.addItem()}>Add to inventory</button>
		);
		return (
			<div className="form">
				<img
					className="image-preview"
					src={
						this.state.img === '' ? (
							'https://http.cat/404'
						) : (
							this.state.img
						)
					}
					alt={this.state.product_name}
				/>
				<div className="form-inputs">
					<p className="input-label">Image URL:</p>
					<input value={this.state.img} onChange={(e) => this.handleChange(e, 'img')} />
					<p className="input-label">Product Name:</p>
					<input value={this.state.product_name} onChange={(e) => this.handleChange(e, 'product_name')} />
					<p className="input-label">Price:</p>
					<input value={this.state.price} onChange={(e) => this.handleChange(e, 'price')} />
					<div className="form-buttons-container">
						<Link to="/"><button>Cancel</button>
						</Link>
						<Link to="/">{addOrUpdate}</Link>
					</div>
				</div>
			</div>
		);
	}
}
export default Form;
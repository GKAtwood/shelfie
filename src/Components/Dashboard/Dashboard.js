import React, {Component} from 'react';
import Product from '../Product/Product'


////no state///no methods


class Dashboard extends Component{
    render(){
        // const {products} = this.props;
              
        return(
            <div>
                {this.props.products}
                
              <Product />


            </div>

        )
    }
}

export default Dashboard
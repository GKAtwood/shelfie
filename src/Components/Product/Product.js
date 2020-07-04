import React, {Component} from 'react';


///no state////no methods


class Product extends Component{
    
    render(){
        

        return(
            <div>
            {this.props.item}
            {this.props.value}
            </div>

        )
    }
}

export default Product
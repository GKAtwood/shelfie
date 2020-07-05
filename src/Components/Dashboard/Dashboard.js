import React from 'react';
import Product from '../Product/Product'



////no state///no methods

const Dashboard = (props) => {
    console.log(props)
   

    const mappedProducts = props.productList.map(item =>{
        console.log(item)
        return(
            
            <div key={item}>
                <h2>{item.product_name}</h2>
                <h3>{item.price}</h3>
                <h4>{item.img}</h4>
                
            </div>
           
           
             )
    })

 return(

<div className = "Dashboard">
        <h1>Dashboard</h1>
        <Product list = {mappedProducts}/>
        
        

</div>
    )
}

export default Dashboard
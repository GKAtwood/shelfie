import React from 'react';
import Product from '../Product/Product'



////no state///no methods


const Dashboard = props => {
    console.log(props)
    // const mappedProducts = props.productList.map(item => {
    //     return(
    //         <div key={item}>
    //             <h2>{item.product_name}</h2>
    //             <h3>{item.price}</h3>
                // <h4>{item.img}</h4>
                
    //         </div>
    //     )
    // })
    

    return(

<div>
        <h1>Dashboard</h1>
        <Product />
        {/* {mappedProducts} */}
        

</div>



    )





}

export default Dashboard
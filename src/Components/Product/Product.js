import React, { Component } from 'react';



///no state////no methods


export default class Product extends Component{
    
 render(){
    console.log(this.props)
    // return (
    //     <ul>
    //       {list.map((item) => (
    //         <li key={item.id}>
    //           <span>{item.firstname}</span>
    //           <span>{item.lastname}</span>
    //           <span>{item.year}</span>
    //         </li>
    //       ))}
    //     </ul>
    //   );
    // };
        

        return(
           <div>
                {this.props.list}

           </div>
        
        
    

  
        )
 }
}

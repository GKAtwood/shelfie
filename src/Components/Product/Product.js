import React from 'react';



///no state////no methods



const Product= (props) => {
   console.log(props)
   return(

      

      <form className = 'Product'>
              <h1 >{props.list[0]}
              <button>Edit</button>
              <button>Delete</button>
             </h1>
               <h2>  {props.list[1]}
                <button>Edit</button>
                <button >Delete</button>                
                 </h2>
                <h3>
               {props.list[2]}
                <button>Edit</button>
                <button>Delete</button>
               </h3>
                
                
                
        </form>
        













   )
}

export default Product

// export default class Product extends Component{
   
//  render(){
//     console.log(this.props)
    
        

//         return(
//            <div className = 'Product'>
//               <h1 >
//                 {this.props.list[0]}
//                 <button>Edit</button>
//                 <button>Delete</button>
//               </h1>
//                <h2>
//                 {this.props.list[1]}
//                 <button>Edit</button>
//                 <button >Delete</button>
//                 </h2>
//                 <h3>
//                 {this.props.list[2]}
//                 <button>Edit</button>
//                 <button>Delete</button>
//                 </h3>
                
                
                
               

//            </div>
        
        
    

  
//         )
//  }
// }

import { useEffect, useState } from "react";
import Product from "./Product";
const Content = () => {
    var [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:80/ECAPI/articles.php').then(
        response=>{
            var data=response.json();
            return data; 
        }
        ).then(data=>{
            setProducts(data);
        }).catch(err=>{
            console.log(err);
        })
    })
    
    return ( 
        <div className="content">
            { products.map((product)=>{
               return <Product product={product}/>
            })}
        </div>
     );
}
 
export default Content;
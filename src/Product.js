import Button from "./Button";
import productIm from "./img/product.jpg";
const Product = ({product}) => {
    return ( 
        <div className="product">
           <table>
               <tr>
                   <td><img src={productIm} alt="" /></td>
                   <td>
                       <table>
                           <tr>
                               <td><div>Designation:</div></td>
                               <td><div>{product.designation}</div></td>
                           </tr>
                           <tr>
                               <td><div>Prix</div></td>
                               <td><div>{product.prix}</div></td>
                           </tr>
                           <tr>
                               <td></td>
                               <td><Button action={"Ajouter au panier"} data={product}/></td>
                           </tr>
                       </table>
                   </td>
               </tr>
           </table>
        </div>
     );
}
 
export default Product;
<div className="product">
    <tr>
    <td>

    </td>
    </tr>
</div>
import { useEffect, useState } from "react";
import Lien from "./Lien";

const Cart = () => {
    var [cart, setCart]=useState({});
    var total=0;
    useEffect(()=>{
        var panier=JSON.parse(sessionStorage.getItem('cart'));
        if(panier!=null)
        setCart(panier);
    },[]);
    return ( 
        <div className="cart">
            <table>
                <tr>
                    <th>Designation</th>
                    <th>Prix</th>
                    <th>Quantité</th>
                    <th>Sous-Total</th>
                </tr>
                {
                    Object.keys(cart).map((key)=>{
                        total=total+(cart[key].quantite)*(cart[key].prix);
                        return (
                        <tr>
                            <td>{cart[key].designation}</td>
                            <td>{cart[key].prix} DH</td>
                            <td>{cart[key].quantite}</td>
                            <td>{(cart[key].quantite)*(cart[key].prix)} DH</td>
                        </tr>
                        );
                    })
                }
                <tr>
                    <td colSpan="3"><b>Total</b></td>
                    <td>{total} DH</td>
                </tr>
            </table>
            <br/>
            <Lien to={"/"} lien={"Continuer mes achats"}/><br/>
            <Lien to={"/identity"} lien={"Finaliser ma commande"}/>
        </div>
     );
}
 
export default Cart;
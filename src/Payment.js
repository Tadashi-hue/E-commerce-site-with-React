import { checkLuhn } from "./util/checkLuhn";
import { useHistory, useLocation } from "react-router";

const Payment = () => {
    var location=useLocation();
    var history=useHistory();
    var montant=0;
    const client=location.state.client;
    const cart=location.state.cart;
    Object.values(location.state.cart).forEach(article=>{
        montant+=article.prix*article.quantite;
    });
    const handlePayment=(e)=>{
        e.preventDefault();
        if(checkLuhn()){
            history.push({
                pathname:"/terminer",
                state:{
                    client:client,
                    cart:cart
                }
            });
        }
        else{
            alert("Entrez un numero de carte valide");
        }
    }
    return ( 
        <div className="payment">
        <form onSubmit={handlePayment}>
            <legend>Payment par carte</legend>
            <table>
            <tr>
                <td><label>Montant:</label></td>
                <td>{montant} DH</td>
            </tr>
            <tr>
                <td><label>N° Carte:</label></td>
                <td><input type="text" id="num_carte" required/></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="submit" /></td>
            </tr>
            </table>
        </form>
        </div>
     );
}
 
export default Payment;
import { useLocation } from "react-router";
import { useHistory } from "react-router";
const Commande = () => {
    const location=useLocation();
    const client=location.state.client;
    const  cart=JSON.parse(sessionStorage.getItem('cart'));
    var history=useHistory();
    const handlePayment=(e)=>{
        e.preventDefault();
        const payment=document.forms[0].elements.payment.value;
        console.log(payment);
        switch(payment){
            case 'cash':
                history.push({
                    pathname:"/Terminer",
                    state:{
                        client:client,
                        cart:cart
                    }
                });
                break;
            case 'carte':
                history.push({
                    pathname:"/Payment",
                    state:{
                        client:client,
                        cart:cart
                    }
                });
                break;
            default: return;
        }

    }
    return ( 
        <div className="commande">
            <form onSubmit={handlePayment}>
                <fieldset>
                    <legend>Coordonnée</legend>
                    <table>
                        <tr>
                            <td><label>Nom:</label></td>
                            <td><input type="text" value={client.nom} readOnly/></td>
                        </tr>
                        <tr>
                            <td><label>Prenom:</label></td>
                            <td><input type="text" value={client.prenom} readOnly/></td>
                        </tr>
                        <tr>
                            <td><label>Age:</label></td>
                            <td><input type="text" value={client.age} readOnly/></td>
                        </tr>
                        <tr>
                            <td><label>Adresse:</label></td>
                            <td><input type="text" value={client.adresse} readOnly/></td>
                        </tr>
                        <tr>
                            <td><label>Ville:</label></td>
                            <td><input type="text" value={client.ville} readOnly/></td>
                        </tr>
                    </table>
                </fieldset>
                <br />
                <fieldset>
                    <legend>AdresseLivraison</legend>
                    <input type="text" name="adrl" required/>
                </fieldset>
                <br />
                <fieldset>
                    <legend>Mode de Paiment</legend>
                    <table>
                        <tr>
                            <td><label>Cash</label></td>
                            <td><input type="radio" value="cash" name="payment" /></td>
                        </tr>
                        <tr>
                            <td><label>Carte</label></td>
                            <td><input type="radio" value="carte" name="payment" defaultChecked/></td>
                        </tr>
                    </table>
                </fieldset>
                <br />
                <input id="payer"type="submit" value="Payer"/>
            </form>
        </div>
     );
}
 
export default Commande;
import { useEffect ,useState} from "react";
import { useLocation } from "react-router";
import Lien from "./Lien";
const Terminer = () => {
    var [num_com,setNum_com]=useState(0);
    var [isSaved,setIsSaved]=useState(false);
    var location=useLocation();
    const client=location.state.client;
    const cart=location.state.cart;
    const today=new Date();
    const date=today.getFullYear()+'-'+today.getMonth()+'-'+today.getDay();
    const commande=JSON.stringify({id_client:client.id_client, date:date,cart:cart});
useEffect(()=>{
    fetch('http://localhost:80/ECAPI/savecommande.php',{
        method:'POST',
        body:commande,
    }).then(response=>{
        var data=response.json();
        return data;
    }).then(data=>{
        setNum_com(data);
        setIsSaved(true);
    })
    .catch(err=>{
        console.log(err);
    })
},[commande]);
return ( 
    <div className="terminer">
        {isSaved && <div>
        <p>Merci d'avoir effectué vos achats chez nous</p>
        <p>Votre numero de commande est: {num_com}</p>
        </div>}
        <div className="retour">
        <Lien to="/" lien="Retour à l'accueil"/>
        </div>
        
    </div>
 );

}
 
export default Terminer;
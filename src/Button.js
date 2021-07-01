import { EventEmitter } from "./util/EventEmitter";
const Button = ({action,data}) => {
    const addToCart=()=>{
        var {id_article:id,designation, prix, categorie}=data;
        var cart=sessionStorage.getItem('cart');
        if(!cart){
            cart={};
            cart[id]={id:id,designation:designation, prix:prix,categorie:categorie, quantite:1};
        }
        else{
            cart=JSON.parse(cart);
            if(cart[id]===undefined){
            cart[id]={id:id,designation:designation, prix:prix,categorie:categorie, quantite:1};
            }
            else{
            cart[id].quantite++;
            }
        }
        sessionStorage.setItem('cart',JSON.stringify(cart));
        EventEmitter.dispatch('addToCart',true);
    }
    const handleClick=(e)=>{
        e.target.style="width:3.9cm; height:0.9cm;";
        setTimeout(()=>{e.target.style="width:4cm;height:1cm;";},100);
        switch(action){
            case "Ajouter au panier":
                addToCart();
                break;
            default:
                return;
        }
    }
    
    return (  
        <div className="button">
            <button onClick={handleClick}>{action}</button>
        </div>
    );
}
 
export default Button;
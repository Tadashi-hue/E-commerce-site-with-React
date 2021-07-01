import MenuElement from "./MenuELement";
import informatiqueIm from "./img/informatique.png";
import videoIm from "./img/video.jpg";
import diversIm from "./img/divers.png";
import cartIm from "./img/cart.png";
import adminIm from "./img/admin.jpg";
import Lien from "./Lien";
import { EventEmitter } from "./util/EventEmitter";
import Popup from "./Popup";
import { useRef, useState } from "react";

const Menu = () => {
    var [isAdding,setisAdding]=useState(false);
    var [popup,setPopup]=useState(null);
    const callbackRef=node=> { console.log(node);}
    const showPopUp=(data)=>{
        setisAdding(true);
        //popup.style="color:white";
        setTimeout(()=>{setisAdding(false)},1000);
    }
    EventEmitter.subscribe('addToCart',(data)=>showPopUp(data));
    return ( 
        <div className="menu">
            <table>
                <tr>
                <td><img src={informatiqueIm} alt="" style={{width:"40px"}}/></td>
                <td><MenuElement element={"Informatique"}/></td>
                </tr>
                <tr>
                <td><img src={videoIm} alt="" style={{width:"40px"}}/></td>
                <td><MenuElement element={"Video"}/></td>
                </tr>
                <tr>
                <td><img src={diversIm} alt="" style={{width:"40px"}}/></td>
                <td><MenuElement element={"Divers"}/></td>
                </tr>
                <tr>
                <td><img src={cartIm} alt="" style={{width:"40px"}}/></td>
                <td><Lien to={"/cart"} lien={"Panier"}/></td>
                </tr>
                <tr>
                <td><img src={adminIm} alt="" style={{width:"40px"}}/></td>
                <td><Lien to={"/Admin"} lien={"Admin"}/></td>
                </tr>
            </table>
             {isAdding && <Popup text="Added" ref={callbackRef}/>}
        </div>
     );
}
 
export default Menu;
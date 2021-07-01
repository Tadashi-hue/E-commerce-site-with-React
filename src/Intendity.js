import { useHistory } from "react-router";
const Indetity = () => {
    var history=useHistory();
    const handleConnexion=(e)=>{
        e.preventDefault();
        const Elts=document.forms[0].elements;
        const mail=Elts.mailc.value;
        const mdp=Elts.mdpc.value;
        //We can apply some form validation here
        const client={ mail:mail, mdp:mdp };
        fetch('http://localhost:80/ECAPI/connexion.php',{
            method:'POST',
            body:JSON.stringify(client)
        }).then((response)=>{
            var data=response.json();
            return data;
        }).then((data)=>{
            history.push({
                pathname:"/commande",
                state:{client:data}
            });
        }).catch((err)=>{
            console.log(err);
        })
    }
    const handleInscrption=(e)=>{
        e.preventDefault();
        const Elts=document.forms[1].elements;
        const nom=Elts.nomi.value;
        const prenom=Elts.prenomi.value;
        const age=Elts.agei.value;
        const mail=Elts.maili.value;
        const adr=Elts.adri.value;
        const ville=Elts.villei.value;
        const mdp=Elts.mdpi.value;
        //We can apply some form validation here
        const client={ nom:nom, prenom:prenom, age:age, mail:mail, adr:adr, ville:ville, mdp:mdp };
        fetch('http://localhost:80/ECAPI/inscription.php',{
            method:'POST',
            body:JSON.stringify(client)
        }).then((response)=>{
            var data=response.json();
            return data;
        }).then((data)=>{
            client["id"]=data;
            history.push({
                pathname:"/commande",
                state:{data:client}
            });
        }).catch((err)=>{
            console.log(err);
        })
    }
    return ( 
        <div className="identity">
            <div className="connexion">
                <form onSubmit={handleConnexion}>
                <fieldset>
                    <legend>Vous avez dejà un compte?</legend>
                    <table>
                        <tr>
                            <td><label>e-mail</label></td>
                            <td><input type="text" placeholder="example@gmail.com" name="mailc" required /></td>
                        </tr>
                        <tr>
                            <td><label>Mot de passe</label></td>
                            <td><input type="password"name="mdpc"  /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Connexion"/></td>
                        </tr>
                    </table>
                </fieldset>
                </form>
            </div>
            <div className="inscription">
                <form onSubmit={handleInscrption}>
                <fieldset>
                    <legend>S'inscrire</legend>
                    <table>
                        <tr>
                            <td><label>Nom:</label></td>
                            <td><input type="text" name="nomi" required/></td>
                        </tr>
                        <tr>
                            <td><label>Prénom:</label></td>
                            <td><input type="text" name="prenomi" required/></td>
                        </tr>
                        <tr>
                            <td><label>Age:</label></td>
                            <td><input type="text" name="agei" required/></td>
                        </tr>
                        <tr>
                            <td><label>e-mail:</label></td>
                            <td><input type="text" name="maili" required/></td>
                        </tr>
                        <tr>
                            <td><label>Adresse:</label></td>
                            <td><input type="text" name="adri" required/></td>
                        </tr>
                        <tr>
                            <td><label>Ville:</label></td>
                            <td><input type="text" name="villei" required/></td>
                        </tr>
                        <tr>
                            <td><label>Mot de passe:</label></td>
                            <td><input type="password" name="mdpi" required/></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Créer un compte"/></td>
                        </tr>
                    </table>
                </fieldset>
                </form>
            </div>
        </div>
     );
}
 
export default Indetity;
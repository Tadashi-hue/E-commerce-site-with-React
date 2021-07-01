import Button from "./Button";
import Input from "./Input";
const Search = () => {
    return ( 
        <div className="search">
            <tr>
                <td><Input placeholder={"Rechercher par nom, catégorie, marque"} type="text"/></td>
                <td><Button action={"Rechercher"}/></td>
            </tr>
        </div>
     );
}
 
export default Search;
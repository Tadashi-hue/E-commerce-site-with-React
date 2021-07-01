import { Link } from "react-router-dom";
const Lien = ({to , lien}) => {
    return ( 
        <div className="lien">
            <Link to={to}>{lien}</Link>  
        </div>
     );
}
 
export default Lien;
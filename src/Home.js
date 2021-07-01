
import Search from "./Search";
import Menu from "./Menu";
import Content from "./Content";

const Home = () => {
    return ( 
        <div className="home">
            <Search/>
            <Menu/>
            <Content/>
        </div>
     );
}
 
export default Home;
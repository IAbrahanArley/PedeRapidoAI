import Navbar from "./components/header";
import Home from "./components/home";
import Subscriptions from "./components/subscriptions";

const LandingPage = () => {
    return ( 
        <div className="flex flex-col items-center space-y-24">
            <Navbar/>
            <Home/>
            <Subscriptions/>
        </div>
     );
}
 
export default LandingPage;
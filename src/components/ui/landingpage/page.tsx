import Footer from "./components/footer";
import Navbar from "./components/header";
import Home from "./components/home";
import ImpulsioneVendas from "./components/impulsionar";
import DeliveryInfo from "./components/info-delivery";
import Infos from "./components/infos";
import Subscriptions from "./components/subscriptions";

const LandingPage = () => {
    return ( 
        <div className="flex flex-col items-center space-y-24">
            <Navbar/>
            <Home/>
            <Infos/>
            <ImpulsioneVendas/>
            <Subscriptions/>
            <DeliveryInfo/>
            <Footer/>
        </div>
     );
}
 
export default LandingPage;
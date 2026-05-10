import Navbar from "./Components/Navbar";
import React from "react";

import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Store from "./Pages/Store";
import ContactX from "./Pages/ContactX";
import FlightBookingFlow from "./Pages/Booking/FlightBookingFlow";


{/* // Cart Context */}
import { CartProvider, useCart } from "./context/CartContext";


// Services
import ParatrikeAirtours from "./Pages/Service/ParatrikeAirtours";
import ParamotorTraining from "./Pages/Service/ParamotorTraining";
import OtherServices from "./Pages/Service/OtherServices";
import ParamotorAirshow from "./Pages/Service/ParamotorAirshow";
import AerialVideography from "./Pages/Service/AerialVideography";
import Partnership from "./Pages/Service/Partnership";
import PreviousOrders from "./Pages/Store/Views/PreviousOrders"; // المسار الذي ذكرته
// // Our Work
import OurGallery from "./Pages/Our Work/OurGallery";
import MediaCoverage from "./Pages/Our Work/MediaCoverage";
import Airshows from "./Pages/Our Work/Airshows";

const CartPage = ({ setView }) => {
  const { CartUI } = useCart();
  return <CartUI setView={setView} />;
};

function App() {
    const [view, setView] = React.useState("store");
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contactX" element={<ContactX />} />
<Route path="/flightbookingflow" element={<FlightBookingFlow />} />
        <Route path="/cart" element={<CartPage setView={setView} />} />
<Route path="/previousorders" element={<PreviousOrders />} />

        {/* Services */}
        <Route path="/services/paratrikeairtours" element={<ParatrikeAirtours />} />
        <Route path="/services/paramotortraining" element={<ParamotorTraining />} />
        <Route path="/services/otherservices" element={<OtherServices />} />
        <Route path="/services/paramotorairshow" element={<ParamotorAirshow />} />
        <Route path="/services/aerialvideography" element={<AerialVideography />} />
        <Route path="/services/partnership" element={<Partnership />} />

        {/* Our Work */}
        <Route path="/ourwork/ourgallery" element={<OurGallery />} />
        <Route path="/ourwork/mediacoverage" element={<MediaCoverage />} />
        <Route path="/ourwork/airshows" element={<Airshows />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

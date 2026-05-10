import Home from "./Pages/Home";
import About from "./Pages/About";
import Store from "./Pages/Store";
import ContactX from "./Pages/ContactX";

// Services
import AerialVideography from "./Pages/Service/AerialVideography";
import ParatrikeAirtours from "./Pages/Service/ParatrikeAirtours";
import ParamotorAirshow from "./Pages/Service/ParamotorAirshow";
import Partnership from "./Pages/Service/Partnership";
import OtherServices from "./Pages/Service/OtherServices";
import ParamotorTraining from "./Pages/Service/ParamotorTraining";

// Our Work
import Airshows from "./Pages/Our Work/Airshows";
import OurGallery from "./Pages/Our Work/OurGallery";
import MediaCoverage from "./Pages/Our Work/MediaCoverage";


// src/routes.js
const routes = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Store", path: "/store" },
  { name: "Contact", path: "/contactX" },

  // Services
  { name: "Paratrike Airtours", path: "/services/paratrikeairtours" },
  { name: "Paramotor Training", path: "/services/paramotortraining" },
  { name: "Other Services", path: "/services/otherservices" },
  { name: "Paramotor Airshow", path: "/services/paramotorairshow" },
  { name: "Aerial Videography", path: "/services/aerialvideography" },
  { name: "Partnership", path: "/services/partnership" },

  // Our Work
  { name: "Gallery", path: "/ourwork/ourgallery" },
  { name: "Media Coverage", path: "/ourwork/mediacoverage" },
  { name: "Airshows", path: "/ourwork/airshows" },
];

export default routes;




import { Component } from "react";
import "./App.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/css/style.css";

import About from "./components/about.component";
import Home from "./components/home.component";
import PrathibaUser from "./components/prathiba.component";
import ChristopherUser from "./components/christopher.component";
import MTKComponent from "./components/MTK.component";
import TunniUser from "./components/tunni.component";
import Jingxing from "./components/jingxing.component";
import AungUser from "./components/akm.component";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Contact from "./components/pages/Contact.component";
import FoodRecord from "./components/pages/FoodRecord";
import History from "./components/pages/History";

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/prathiba" element={<PrathibaUser />} />
          <Route path="/myatkyaw" element={<MTKComponent />} />
          <Route path="/aung" element={<AungUser />} />
          <Route path="/christopher" element={<ChristopherUser />} />
          <Route path="/tunni" element={<TunniUser />} />
          <Route path="/jingxing" element={<Jingxing />} />
          <Route path="/" exact element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/FoodRecord" element={<FoodRecord />} />
          <Route path="/viewHistory" element={<History />} />
        </Routes>
      </Router>
    );
  }
}
export default App;

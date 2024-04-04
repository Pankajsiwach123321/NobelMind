// import { Container } from "postcss";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Header from "./components/Header";
import Aboutus from "./components/Aboutus";
import Whychose from "./components/Whychose";
import Contactus from "./components/Contactus";
import AskQuetion from "./components/AskQuetion";
import Subcribe from "./components/Subcribe";
import Footer from "./components/Footer";
import BackTop from "./components/BackTop";
import ProgressBar from "./components/ProgressBar";
import Preloder from "./components/Preloder";
import AOS from "aos";
import "aos/dist/aos.css";
document.body.classList.add("overflow-hidden");

function App() {
  const [load, setload] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      document.body.classList.remove("overflow-hidden");
      setload(false);
    }, 4000);
  });
  React.useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className=" overflow-hidden ">
      {load && <Preloder />}
      <ProgressBar />
      <Header />
      <Aboutus />
      <Whychose />
      <Contactus />
      <AskQuetion />
      <Subcribe />
      <Footer />
      <BackTop />
    </div>
  );
}

export default App;

import { Router, Route } from "wouter";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
// import { useWalletEvent } from "./services/useWalletEvent";
import Footer from "./components/Footer";

const App = () => {

  return (
    <Router>
      <Navbar />
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Footer />
    </Router>
  );
};

export default App;

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Browse from "./components/browse/Browse";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/browse">
        <Browse />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Browse from "./components/browse/Browse";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/browse" render={() => <Browse />} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Browse from "./components/browse/Browse";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/browse" render={() => <Browse />} />
        <Route exact path="/error">
          <ErrorPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ViewportProvider } from "./hooks/useViewport";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/404";

const App = () => {
  return (
    <Router>
      <ViewportProvider>
        <Header />
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/join" component={JoinPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
        <Footer />
      </ViewportProvider>
    </Router>
  );
};

export default App;

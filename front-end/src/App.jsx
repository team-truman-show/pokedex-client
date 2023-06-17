import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ViewportProvider } from "./hooks/useViewport";
import GlobalStyle from "./GlobalStyle";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/404";
import DetailPage from "./pages/DetailPage";

const App = () => {
  return (
    <Router>
      <ViewportProvider>
        <GlobalStyle />
        <Header />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/join" component={JoinPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/detail/:page" component={DetailPage}/>
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </ViewportProvider>
    </Router>
  );
};

export default App;

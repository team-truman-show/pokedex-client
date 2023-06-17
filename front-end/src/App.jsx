import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ViewportProvider } from "./hooks/useViewport";

// import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import NotFoundPage from "./pages/404";

const App = () => {
  return (
    <Router>
      <ViewportProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/signUp" component={SignUpPage} />
            <Route exact path="/login" component={SignInPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </ViewportProvider>
    </Router>
  );
};

export default App;

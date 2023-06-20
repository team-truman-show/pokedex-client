import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ViewportProvider } from "./hooks/useViewport";
import store from "./redux/store/configureStore";

import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import NotFoundPage from "./pages/404";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <ViewportProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/main" component={MainPage} />
              <Route exact path="/signUp" component={SignUpPage} />
              <ProtectedRoute path="/mypage" component={MyPage} />
              <Route exact path="/detail/:page" component={DetailPage} />
              <Route exact path="/login" component={LoginPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Layout>
        </ViewportProvider>
      </Router>
    </Provider>
  );
};

export default App;

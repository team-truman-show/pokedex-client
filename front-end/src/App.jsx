import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ViewportProvider } from "/@/hooks/useViewport";

// import "./App.css";
import Layout from "/@/components/Layout";
import MainPage from "/@/pages/MainPage";
import SignUpPage from "/@/pages/SignUpPage";
import LoginPage from "/@/pages/LoginPage";
import NotFoundPage from "/@/pages/404";
import ProtectedRoute from "/@/components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <ViewportProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/signUp" component={SignUpPage} />
            <ProtectedRoute path="/mypage" component={MyPage} />
            <ProtectedRoute path="/mypocket" component={MyPocket} />
            <Route exact path="/login" component={LoginPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Layout>
      </ViewportProvider>
    </Router>
  );
};

export default App;

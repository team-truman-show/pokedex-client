import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ViewportProvider } from "./hooks/useViewport";
import store from "./redux/store/configureStore";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import SignUpPage from "./pages/SignUpPage";
import MyPage from "./pages/MyPage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import EvolutionPage from "./pages/EvolutionPage";
import NotFoundPage from "./pages/404";
import BringUpPage from "./pages/BringUpPage";

const theme = createTheme({
  typography: {
    fontFamily: "DungGeunMo",
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
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
                <Route exact path="/bringup/:userid/:pokeid" component={BringUpPage}/>
                <Route exact path="/evolution" component={EvolutionPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </Layout>
          </ViewportProvider>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

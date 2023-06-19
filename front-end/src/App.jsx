import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import JoinPage from "./pages/JoinPage";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./JoinPage";
import LoginPage from "./LoginPage";
import NotFoundPage from "./pages/404";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/join" component={JoinPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
      <Footer />
    </Provider>
  );
};

export default App;

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   );
// }

// export default App;

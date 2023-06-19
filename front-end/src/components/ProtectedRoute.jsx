// src/components/ProtectedRoute.jsx
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { selectIsLogin } from "/@/redux/slices/authSlice";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
};

export default ProtectedRoute;

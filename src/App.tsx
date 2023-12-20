import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Protected from "./Protected";

import { useSelector } from "react-redux";
interface authStateType {
  auth: {
    isLogin: boolean;
    email: string;
    password: string;
  };
}

const App = () => {
  const authState = useSelector((state: authStateType) => state.auth);
  return (
    <div className=" max-w-screen-xl mx-auto">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Protected isAuthenticated={authState.isLogin}>
                <AuthPage></AuthPage>
              </Protected>
            }
          />
          <Route
            path="/home"
            element={
              <Protected isAuthenticated={authState.isLogin}>
                <Home></Home>
              </Protected>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

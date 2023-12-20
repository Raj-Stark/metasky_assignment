import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";

const App = () => {
  return (
    <div className=" max-w-screen-xl mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthPage></AuthPage>} />
        </Routes>
        <Routes>
          <Route path="/home" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

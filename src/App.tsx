import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className=" max-w-screen-xl mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

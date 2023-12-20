import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ isAuthenticated, children }: any) => {
  const navigate = useNavigate();

  console.log(isAuthenticated);

  // if (isAuthenticated) {
  //   navigate("/home");
  //   console.log("raj");
  // }

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    } else {
      navigate("/home");
    }
  }, [isAuthenticated]);
  return children;
};

export default Protected;

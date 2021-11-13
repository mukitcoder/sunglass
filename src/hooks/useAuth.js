import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
// For Use Auth
const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;

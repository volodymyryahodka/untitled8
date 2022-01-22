import {useContext} from "react";
import {AuthContext} from "../hoc/AuthProvider";

export const useAuth = () => useContext(AuthContext)
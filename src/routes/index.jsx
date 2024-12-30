import { BrowserRouter } from "react-router-dom";
import { AuthProvider, AuthContext } from "../contexts/AuthContext";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
  return(
    <BrowserRouter future={{v7_startTransition: true,}}>
      <AuthProvider>
        <AuthContext.Consumer>
          {({ user }) => user ? <AppRoutes /> : <AuthRoutes />}
        </AuthContext.Consumer>
      </AuthProvider>
    </BrowserRouter>
  )
}
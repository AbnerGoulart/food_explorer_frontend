import { BrowserRouter } from "react-router-dom";
import { AuthProvider, AuthContext } from "../contexts/AuthContext";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { DishesProvider } from "../contexts/DishesContext";

export function Routes() {

  const renderRoutes = (user) => {
    if (user == null) {
      return null
    }

    return user !== "" ? <AppRoutes /> : <AuthRoutes />
  }

  return (
    <BrowserRouter future={{ v7_startTransition: true, }}>
      <AuthProvider>
        <DishesProvider>
          <AuthContext.Consumer>
            {({ user }) => renderRoutes(user)}
          </AuthContext.Consumer>
        </DishesProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}
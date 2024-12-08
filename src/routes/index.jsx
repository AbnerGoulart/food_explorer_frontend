import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
  return(
    <BrowserRouter future={{v7_startTransition: true,}}>
      <AppRoutes />
    </BrowserRouter>
  )
}
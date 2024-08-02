import { Route } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
export const authRoutes = (
  <>
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/register" element={<Register />} />
  </>
);

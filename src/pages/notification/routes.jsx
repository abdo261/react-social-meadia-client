import { Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import List from "./List";

export const notificationsRoutes = (
    <Route path="/notifications" element={<Layout/>}>
        <Route index element={<List/>} />
    </Route>
)
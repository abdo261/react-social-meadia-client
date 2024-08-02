import { Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import List from "./List";

export const searchRoutes = (
    <Route path="/search" element={<Layout/>}>
        <Route index element={<List/>} />
    </Route>
)
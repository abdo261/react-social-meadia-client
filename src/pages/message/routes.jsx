import { Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import List from "./List";

export const messagesRoutes = (
    <Route path="/messages" element={<Layout/>}>
        <Route index element={<List/>} />
    </Route>
)
import { Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import List from "./List";

export const homeRoutes = (
    <Route path="/" element={<Layout/>}>
<Route index element={<List/>} />
    </Route>
)
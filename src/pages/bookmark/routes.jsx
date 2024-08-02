import { Route } from "react-router-dom";
import Layout from "../../layout/Layout";
import List from "./List";

export const bookmarksRoutes = (
    <Route path="/bookmarks" element={<Layout/>}>
        <Route index element={<List/>} />
    </Route>
)
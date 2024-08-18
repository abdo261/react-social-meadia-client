import { Navigate, Route } from "react-router-dom";
import Profile from "./Profile";
import Layout from "../../layout/Layout";


export const profileRoutes = (
    <Route path="profile" element={<Layout/>} >
        <Route index element={<Navigate to='/'/>}/>
        <Route path=":id" element={<Profile/>}/>
    </Route>
    
)
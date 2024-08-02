import React from "react";
import { homeRoutes } from "./pages/home/routes";
import { Navigate, Route, Routes } from "react-router-dom";
import { notificationsRoutes } from "./pages/notification/routes";
import { messagesRoutes } from "./pages/message/routes";
import { bookmarksRoutes } from "./pages/bookmark/routes";
import { searchRoutes } from "./pages/search/routes";
import { authRoutes } from "./pages/auth/routes";
import { useSelector } from "react-redux";
import NoteFoundPage from "./pages/NoteFoundPage";

const App = () => {
  const { user_info } = useSelector((state) => state.auth);
  return (
    <Routes>
      {user_info ? (
        <>
          {homeRoutes}
          {notificationsRoutes}
          {messagesRoutes}
          {bookmarksRoutes}
          {searchRoutes}
          <Route path="/auth/*" element={<Navigate to="/" />} />
          <Route path="*" element={<NoteFoundPage />}/>
        </>
      ) : (
        <>
          {authRoutes}
          <Route path="/" element={<Navigate to='/auth/login'/>}/>
          <Route path="*" element={<NoteFoundPage />}/>
        </>
      )}
    </Routes>
  );
};

export default App;

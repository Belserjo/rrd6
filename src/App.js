import { Navigate, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Users from "./components/users";
import Profile from "./components/profile";
import ProfileEdit from "./components/profileEdit";

function App() {
  return (
    <Routes>
      <Route path="" element={<Main />} />
      <Route path="users/*" element={<Users />}>
        <Route path=":userId/*" element={<Profile />}>
          <Route path=":edit" index element={<ProfileEdit />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;

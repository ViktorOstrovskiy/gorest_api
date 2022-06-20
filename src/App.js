import { Routes, Route } from "react-router-dom";
// components
import Users from "./pages/Users";
import Edit from "./pages/Edit";
import Main from "./pages/Main";

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/users" element={<Users />} />
      <Route path="/edit">
        <Route path=":id" element={<Edit />} />
      </Route>
    </Routes>
  </>
);

export default App;

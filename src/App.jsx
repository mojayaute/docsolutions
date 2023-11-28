import Login from './pages/Login'
import { Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import UsersForm from './pages/UsersForm';
import UsersList from './pages/UsersList';

import Auth from './Auth';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/profile" element={<Auth><Profile /></Auth>} />
        <Route exact path="/users/add" element={<Auth><UsersForm /></Auth>} />
        <Route exact path="/users/all" element={<Auth><UsersList /></Auth>} />
      </Routes>
    </>
  )
}

export default App

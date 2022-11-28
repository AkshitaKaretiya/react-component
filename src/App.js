import logo from "./logo.svg";
import "./App.css";
import Sidemenu from "./Components/Sidemenu";
import Header from "./Components/Header";
import BreadCrumb from "./Components/BreadCrumb";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import User from "./Pages/User/User";
import AddUser from "./Pages/User/AddUser";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <BreadCrumb />
        <BrowserRouter>
          <Sidemenu />
          <Routes>
            <Route exact path="/dashboard" element={<Dashboard />}></Route>
            <Route exact path="/users" element={<User />}></Route>
            <Route exact path="/add-user" element={<AddUser />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;

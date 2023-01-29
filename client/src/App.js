import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import LoginForm from './components/LoginForm';
import UserContext from './UserContext';
import { useState } from 'react';
import NavBar from "./components/NavBar";
import MainPage from "./components/MainPage";
import AddVerb from "./components/AddVerb";
import AllVerbs from "./components/AllVerbs";
import Edit from "./components/Edit"

function App() {

  // const initialState = {
  //   loggedIn: Boolean(localStorage.getItem("verbAppToken")),
  // }

  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("verbAppToken")))

  const username = localStorage.getItem("verbAppUsername")


  return (
    <UserContext.Provider value={{ loggedIn, username, setLoggedIn }}>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={loggedIn ? <MainPage /> : <LoginForm />} />
          <Route path="/add-verb" element={<AddVerb />} />
          <Route path="/search" element={<AllVerbs />} />
          <Route path="/verb/:id" element={<Edit />} />



        </Routes>
      </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;

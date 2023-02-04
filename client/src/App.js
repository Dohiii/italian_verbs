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
import FlashMessages from "./components/FlashMessages";

function App() {

  // const initialState = {
  //   loggedIn: Boolean(localStorage.getItem("verbAppToken")),
  // }

  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("verbAppToken")))
  const [flashMessages, setFlashMessages] = useState([])


  function addFlashMessage(msg) {
    setFlashMessages(prev => prev.concat(msg))
  }

  const username = localStorage.getItem("verbAppUsername")


  return (
    <UserContext.Provider value={{ loggedIn, username, setLoggedIn }}>

      <BrowserRouter>
        <FlashMessages messages={flashMessages} />
        <NavBar />
        <Routes>
          <Route path="/" element={loggedIn ? <MainPage /> : <LoginForm addFlashMessage={addFlashMessage} />} />
          <Route path="/add-verb" element={loggedIn ? <AddVerb addFlashMessage={addFlashMessage} /> : <LoginForm />} />
          <Route path="/search" element={loggedIn ? <AllVerbs /> : <LoginForm />} />
          <Route path="/verb/:id" element={loggedIn ? <Edit addFlashMessage={addFlashMessage} /> : <LoginForm />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;

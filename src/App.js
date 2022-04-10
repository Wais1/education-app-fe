import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./pages/Content";
import About from "./pages/About";
import FooterSmall from "./components/FooterSmall";
import Login from "./pages/Login";
import Register from "./pages/Register";
import './App.css';

// Context API Implementation for User context
import { UserProvider } from "./context/UserContext";


function App() {
  // Check for token immediately
  // useEffect(() => {
  //   // check for token in LS when app first runs
  //   if (localStorage.token) {
  //     // if there is a token set axios headers for all requests
  //     setAuthToken(localStorage.token);
  //   }
  //   // try to fetch a user, if no token or invalid token we
  //   // will get a 401 response from our API
  //   store.dispatch(loadUser());

  //   // log user out from all tabs if they log out in one tab
  //   window.addEventListener('storage', () => {
  //     if (!localStorage.token) store.dispatch({ type: LOGOUT });
  //   });

  // }, []);
  return (
    <UserProvider> 
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Footer />
        {/* <FooterSmall /> */}
      </div>
    </UserProvider>
  );
}

export default App;

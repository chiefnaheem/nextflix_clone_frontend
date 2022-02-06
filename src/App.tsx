import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
// import Register from './pages/register/Register';
// import Login from './pages/login/Login';
// import Watch from './pages/watch/Watch';

// declare namespace JSX {
//   interface IntrinsicElements {
//     Home: { type: string; optionalProp?: any };
//   }
// }

const App = () => {
  const user: any = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Home type={null} /> : <Navigate to="/register" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        {user && (
          <>
            <Route path="/series" element={<Home type={"series"} />} />
            <Route path="/movies" element={<Home type={"movie"} />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;

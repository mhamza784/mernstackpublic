import React from "react";
import Login from "../components/login";
import Signup from "../components/signup";
import Index from "../components/Index"
import {
  BrowserRouter as Router, Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";

const routes = () => {
  return (
    <>
      <Router>
        <Routes>

          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/index' element={<Index />} />
        </Routes>
      </Router>

    </>
  )
}

export default routes

import "./App.css";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
import Logout from "./components/Logout";
import { initialState, reducer } from "../src/reducer/userReducer";
import Index from "./components/Index";
export const userContext = createContext();
const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <userContext.Provider value={{ state, dispatch }}>
        <Router>
          <Routes>
            <Route exact path='/' element={<Index />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/login' element={<Login />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/logout' element={<Logout />} />
          </Routes>
        </Router>
      </userContext.Provider>
    </>
  );
}
export default App;

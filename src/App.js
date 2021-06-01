import { Router } from "@reach/router"


import Login from "./components/login";
import Register from "./components/register"
import Home from "./Home"

import Edit from "./components/edit"

import Dashboard from "./Dashboard";
import DashboardHelper from "./DashboardHelper";
import ZTest from "./components/zTest";

import About from "./components/About"
import ForgetPassword  from "./components/ForgetPassword"

function App() {
  return (

    <Router>

      <Home path="/" />
      <Register path="/register" />
      <Login path="/login" />

      <Edit path="/edit" />
      <Dashboard path="/Dashboard" />

      <DashboardHelper path="/DashboardHelper" />
      <ZTest path="/test" />
      <About path="/About" />
      <ForgetPassword path="/ForgetPassword" />


    </Router>

  );
}

export default App;

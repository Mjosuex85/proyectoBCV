
import Home from "./components/Home/Home.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import {
  BrowserRouter,
  Routes,
  Route
  /* Link, */
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

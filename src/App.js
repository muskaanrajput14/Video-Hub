import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from "./Components/Home";
import Videos from "./Components/Videos";
import Upload from "./Components/Upload";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import ForgetPassword from "./Components/ForgetPassword";
import SignUp from "./Components/SignUp";


function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/videos" element={<Videos />}/>
        <Route path="/upload" element={<Upload />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/forgetpassword" element={<ForgetPassword />}/>
        <Route path="/signup" element={<SignUp />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

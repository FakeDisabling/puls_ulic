import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Mainpage from "../src/Mainpage";
import AuthorizationForm from "./components/AuthorizationForm/AuthorizationForm";
function App() {

  return (
    <div className="page-wrapper">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/login" element={<AuthorizationForm />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

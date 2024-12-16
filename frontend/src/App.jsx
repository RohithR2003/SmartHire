import { Routes, Route } from "react-router-dom";
import SignUpPage from "./Pages/SignUpPage.jsx";
import LoginPage from "./Pages/loginPage.jsx";

function App() {

  return (
    <>
     <div>
        <Routes>
          <Route path="/" element={"Home"}/>
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage/> } />
        </Routes>
     </div>
    </>
  )
}

export default App

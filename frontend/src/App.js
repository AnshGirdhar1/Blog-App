import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Profile } from "./components/Profile";
import { Signup } from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup type="Signup"/>} />
        <Route path="/login" element={<Signup type="login" />} />
      </Routes>
    </div>
  );
}

export default App;

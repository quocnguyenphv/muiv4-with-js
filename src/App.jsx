import "./App.css";
import Layout from "./components/Layout";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/sign-up" element={<SignUp />} exact />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

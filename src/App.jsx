import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./componets/Header/Header";
import Footer from "./componets/Footer/Footer";
import DetailedTask from "./pages/DetailedTask/DetailedTask";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="spacing">
        <div className="top">
          <Header />

          <Routes>
            <Route path="/" element={<Navigate to="/tasks" />} />
            <Route path="/tasks" element={<Homepage />} />
            <Route path="/tasks/:id" element={<DetailedTask />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

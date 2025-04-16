import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import Header from "./componets/Header/Header";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<Homepage />} />
        {
          //<Route path="/tasks/:id" element={<DetailedTask />} />
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;

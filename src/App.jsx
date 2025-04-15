import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/tasks" />} />
        <Route path="/tasks" element={<Homepage />} />
        <Route path="/tasks/:id" element={<DetailedTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import Landing from "./components/Landing";
import Wallet from "./components/Wallet";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

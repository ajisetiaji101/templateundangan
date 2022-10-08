import { Route, Routes } from "react-router-dom";
import { Detailpasangan, Jumbotron, Navbar } from "./Components";
import Attending from "./Components/Attending/Attending";
import Detail from "./Components/Detail/Detail";
import Hitungmundur from "./Components/Hitungmundur/Hitungmundur";
import Dashboard from "./Page/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:id" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

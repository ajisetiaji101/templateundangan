import { Detailpasangan, Jumbotron, Navbar } from "./Components";
import Attending from "./Components/Attending/Attending";
import Detail from "./Components/Detail/Detail";
import Hitungmundur from "./Components/Hitungmundur/Hitungmundur";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Detail />
      <Detailpasangan />
      <Attending />
    </div>
  );
}

export default App;

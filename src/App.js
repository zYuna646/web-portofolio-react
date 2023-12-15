import "./App.css";
import { NavBar } from "./component/NavBar";
import { Banner } from "./component/Banner";
import { Contact } from "./component/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Contact />
    </div>
  );
}

export default App;

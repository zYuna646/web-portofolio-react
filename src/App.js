import "./App.css";
import { NavBar } from "./component/NavBar";
import { Banner } from "./component/Banner";
import { Projects } from "./component/Project";
import { Contact } from "./component/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

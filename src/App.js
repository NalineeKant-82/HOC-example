import AddButton from "./AddButton.js";
import "./App.css";
import HoverButton from "./HoverButton/index.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {" "}
        <AddButton />
        <HoverButton />
      </header>
    </div>
  );
}

export default App;

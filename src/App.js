import "./App.css";
import Person from "./Person";
import data from "./data";

function App() {
  return (
    <div className='App'>
      {" "}
      <Person data={data} />
    </div>
  );
}

export default App;

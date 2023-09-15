import "./App.css";
import Cart from "./Components/Cart";
import Course from "./Components/Course";
import Header from "./Components/Header";
function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex justify-between">
          <Course></Course>
        <Cart></Cart>
      </div>
    </>
  );
}

export default App;

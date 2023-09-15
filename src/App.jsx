import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import Course from "./Components/Course";
import Header from "./Components/Header";
function App() {
  const [cart, setCart] = useState([])
  const handleCart =(course) =>{
    const newCart =[...cart, course]
    setCart(newCart)
  }
  return (
    <>
      <Header></Header>
      <div className="md:flex justify-between gap-5">
          <Course handleCart={handleCart}></Course>
        <Cart cart={cart}></Cart>
      </div>
    </>
  );
}

export default App;

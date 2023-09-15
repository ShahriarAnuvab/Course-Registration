import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import Course from "./Components/Course";
import Header from "./Components/Header";
function App() {
  const [cart, setCart] = useState([])
  const [hours, setHours] = useState(0)
  const [totalPrice, setPrice] = useState(0)
  
  const handleCart =(course, hour, price) =>{
    const newCart =[...cart, course]
    // console.log("credit Hours", hours)
    setHours(hours + hour)
    setCart(newCart)
    setPrice(totalPrice + price);
  }
  return (
    <>
      <Header></Header>
      <div className="md:flex justify-between gap-5">
          <Course handleCart={handleCart}></Course>
        <Cart cart={cart} hours={hours} price={totalPrice}></Cart>
      </div>
    </>
  );
}

export default App;

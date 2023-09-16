import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import Course from "./Components/Course";
import Header from "./Components/Header";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [cart, setCart] = useState([]);
  const [hours, setHours] = useState(0);
  const [totalPrice, setPrice] = useState(0);

  const handleCart = (course, hour, price) => {
    const newCart = [...cart, course];
    // console.log("credit Hours", hours)
    const isExist = cart.find((item) => item.id == course.id);
    if (isExist) {
      // toast.success("already added");
      toast.warn('already added', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } else {
      setHours(hours + hour);
      setCart(newCart);
      setPrice(totalPrice + price);
    }
  };
  return (
    <>
      <Header></Header>
      <ToastContainer></ToastContainer>
      
      <div className="md:flex justify-between gap-5">
        <Course handleCart={handleCart}></Course>
        <Cart cart={cart} hours={hours} price={totalPrice}></Cart>
      </div>
    </>
  );
}

export default App;

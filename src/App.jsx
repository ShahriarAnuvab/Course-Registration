import { useState } from "react";
import "./App.css";
import Cart from "./Components/Cart";
import Course from "./Components/Course";
import Header from "./Components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [cart, setCart] = useState([]);
  const [hours, setHours] = useState(0);
  const [totalPrice, setPrice] = useState(0);
  const [remainingHour, setRemainingHour] = useState(20);

  const handleCart = (course, hour, price) => {
    const newCart = [...cart, course];
    // console.log("credit Hours", hours)
    const isExist = cart.find((item) => item.id == course.id);
    let priceTotal = totalPrice + price;
    priceTotal = priceTotal.toFixed(2);
    priceTotal = parseFloat(priceTotal);
    // console.log(priceTotal, typeof priceTotal);
    let totalCredit = hours + hour;
    let remaining = remainingHour - hour;
    // console.log(remaining);

    if (isExist) {
      // toast.success("already added");
      toast.warn("already added", {
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
      if (totalCredit <= 0 || totalCredit > 20) {
        toast.warn(`Cant exceed 20 hours`, {
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
        setRemainingHour(remaining);
        setHours(totalCredit);
        setCart(newCart);
        setPrice(priceTotal);
        
      
      }
     
    }
  };
  return (
    <>
      <Header></Header>
      <ToastContainer></ToastContainer>

      <div className="md:flex justify-between gap-5">
        <Course handleCart={handleCart}></Course>
        <Cart
          cart={cart}
          hours={hours}
          price={totalPrice}
          ramaining={remainingHour}
        ></Cart>
      </div>
    </>
  );
}

export default App;

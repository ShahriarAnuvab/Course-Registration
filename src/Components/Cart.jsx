import PropTypes from "prop-types";
import Cartitems from "./Cartitems";

const Cart = ({ cart,hours, price }) => {
//   console.log(cart);
//   console.log(hours);
  console.log(price);
  

  return (
    <div className="md:w-3/12 ">
      <div className="bg-slate-300 rounded-3xl p-5 bg-base-100 shadow-2xl my-10 ">
        <div>
          <h1 className="text-lg font-semibold text-center border-b-2 p-2 mx-2 text-[#2F80ED] ">
            Credit Hour Remaining: <span className="font-medium"></span>
            00
          </h1>
        </div>
        <div className="border-b-2 p-2 mx-2">
          <h1 className="text-lg font-semibold text-center">
            Added to cart:{" "}
            <span className="font-medium">{cart.length} items</span>{" "}
          </h1>
          <h1 className="text-xl font-bold text-[#1C1B1B] ml-2">
            Course Added:
          </h1>
          {cart.map((item, index) => (
            <Cartitems index={index} key={item.id} cartItems={item}></Cartitems>
          ))}
        </div>
        <div className="border-b-2 p-2 mx-2">
          <h1 className="text-base font-medium text-[#1C1B1B]">
            Total Credit Hour : {hours}
          </h1>
        </div>
        <div className="border-b-2 p-2 mx-2">
          <h1 className="text-base font-semibold text-[#1C1B1B]">
            Total Price :{price} <span>$</span>
          </h1>
        </div>
      </div>
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.array,
  hours : PropTypes.number,
  price : PropTypes.number
};

export default Cart;

import PropTypes from "prop-types";
import Cartitems from "./Cartitems";
const Cart = ({ cart }) => {
    console.log(cart);
  return (
    <div className="md:w-3/12 border border-blue-300 rounded-3xl">
      <div>
        <h1 className="text-lg font-semibold text-center">Credit Hour Remaining: <span className="font-medium"> 7 hr</span></h1>
      </div>
      <div>
        <h1  className="text-lg font-semibold text-center">Added to cart: <span className="font-medium">{cart.length} items</span> </h1>
        {
            cart.map((item, index) => <Cartitems index={index}  key={item.id} cartItems={item}></Cartitems>)
        }
      </div>
    </div>
  );
};
Cart.propTypes = {
  cart: PropTypes.array
};

export default Cart;

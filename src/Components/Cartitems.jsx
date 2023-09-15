import PropTypes from 'prop-types';
const Cartitems = ({cartItems, index}) => {
    // console.log(cartItems)
    // console.log(index)
    
    return (
        <div>
            <p className="text-base font-medium text-[#1C1B1B99] p-2">{index+1}. {cartItems.course_name}</p>
        </div>
            
    );
};
Cartitems.propTypes = {
    cartItems : PropTypes.object,
    index :PropTypes.number
  
}
export default Cartitems;
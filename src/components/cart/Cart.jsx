 import PropTypes from 'prop-types'
 const Cart = ({props}) => {
    console.log()
    return (
        <div>
            <p>cart : {props.length} </p>
        </div>
    );
 };
 Cart.propTypes={
    props:PropTypes.array.isRequired
 }
 export default Cart;
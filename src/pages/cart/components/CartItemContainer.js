import React, {Component} from "react";
import "../style.css";
import {bindActionCreators} from "redux";
import * as actions from "../../../redux/actions";
import {connect} from "react-redux";
import CartItem from "./CartItem";

class CartItemContainer extends Component {

  render() {
    console.log(JSON.stringify(this.props.cartItems, null, 2));
    const cartItems = this.props.cartItems;

    // const cartItemComponents = null;
    const cartItemComponents = Object.keys(cartItems).map((itemId, index) => <CartItem key={index} cartItem={cartItems[itemId]}/>);
    // const cartItemComponents = this.props.cartItems.map((cartItem, index) => <CartItem key={index} cartItem={cartItem}/>);

    return (
      <div className="cartItemContainer">
        {cartItemComponents}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cartItems: state.cartItems,
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect( mapStateToProps, mapDispatchToProps)(CartItemContainer);

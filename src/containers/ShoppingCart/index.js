import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions';
import './ShoppingCart.css';

class ShoppingCart extends Component {


  renderShoppingCart = () => {

    const { shoppingCart, removeFromCartDispatch} = this.props;

    return shoppingCart.map ( (item) => {
      return (
        <li
          key={item.id}
          className={'SC-list-item'}
          onClick={ ()=> removeFromCartDispatch(item.id)}
          >
          <img alt='presentation' className={'SC-image'} src={item.link} />
          {item.title}
        </li>
      )
    })
  }

  render(){
    return (
      <ul className={'SC-list'}>
        {this.renderShoppingCart()}
      </ul>
    )
  }
}

/*
  function connect(mapStateToProps, mapDispatchToProps) {
    return function(ourComponent) {
    }
  }
*/

const mapStateToProps = (reduxState) => ({
  shoppingCart: reduxState.shoppingCart
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCartDispatch: (id) => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

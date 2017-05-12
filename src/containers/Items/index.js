import React, { Component } from 'react';
import { addToCart } from '../../actions';
import { connect } from 'react-redux';
import './Item.css';


class Items extends Component {
  renderList = () => {

    const { items, addToCartAction } = this.props;
    return items.map( (item) => (
        <li
          key={item.id}
          className={'Item-list-item'}
          onClick={ () => addToCartAction(item)}
        >
          <img alt='presentation' className={'Items-image'} src={item.link} />
          <span>{item.title}</span>
        </li>
      )
    );
  }

  render(){
    return (
      <ul className={'Items-list'}>
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = (reduxState) => ({
    items: reduxState.items
});

const mapDispatchToProps = (dispatch) => ({
  addToCartAction: (item) => dispatch(addToCart(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Items);

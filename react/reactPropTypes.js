/*

MyComponent.propTypes = {
  handleClick: PropTypes.func.isRequired
}

Also do:
PropTypes.array.isRequired
PropTypes.bool.isRequired
PropTypes.func.isRequired
PropTypes.number.isRequired
PropTypes.object.isRequired
PropTypes.string.isRequired
PropTypes.symbol.isRequired



*/
import PropTypes from 'prop-types';

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

Items.defaultProps = {
  quantity: 0
};
Items.propTypes = {
  quantity: PropTypes.number.isRequired
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

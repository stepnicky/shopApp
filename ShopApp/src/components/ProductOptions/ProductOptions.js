import styles from './ProductOptions.module.scss';
import Button from '../Button/Button.js';
import PropTypes from 'prop-types';
import OptionSize from '../OptionSize/OptionSize.js';
import OptionColor from '../OptionColor/OptionColor.js';

const ProductOptions = props => {

    const summary = {
        name: props.name,
        price: props.price,
        size: props.currentSize,
        color: props.currentColor
      };

    return (
        <form>
          <OptionSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize} />
          <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
          <Button {...summary} className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
    )
}

ProductOptions.propTypes= {
    currentColor: PropTypes.string.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};

export default ProductOptions;
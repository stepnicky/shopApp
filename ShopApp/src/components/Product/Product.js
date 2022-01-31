import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage.js';
import ProductOptions from '../ProductOptions/ProductOptions.js';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';

const Product = props => {

  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  
  const priceHandler = useMemo(() => {
    if (currentSize === 'S'){
      return props.basePrice;
    } else if (currentSize === 'M'){
        return props.basePrice + props.sizes[1].additionalPrice;  
    } else if (currentSize === 'L'){
        return props.basePrice + props.sizes[2].additionalPrice;
    } else if (currentSize === 'XL'){
        return props.basePrice + props.sizes[3].additionalPrice;  
    }
  }, [currentSize, props.sizes, props.basePrice]);

  return (
    <article className={styles.product}>
      <ProductImage currentColor={currentColor} name={props.name} title={props.title} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {priceHandler}$</span>
        </header>
        <ProductOptions name={props.title} price={priceHandler} sizes={props.sizes} colors={props.colors} currentColor={currentColor} currentSize={currentSize} setCurrentColor={setCurrentColor} setCurrentSize={setCurrentSize} />
      </div>
    </article>
  )
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
};

export default Product;
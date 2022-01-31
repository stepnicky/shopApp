import { useState } from 'react';
import productsData from '../../data/products';
import Product from '../Product/Product';
import shortid from 'shortid';

const Products = () => {
  const [products]  = useState(productsData);

  const renderProducts = products.map(product => <Product key={shortid()} {...product} />);

  return (
    <section>
      {renderProducts}
    </section>
  );
};

export default Products;
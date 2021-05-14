import React from 'react';
import { Product } from '../menu.vm';
import * as classes from './product.styles';
import { useTheme } from '@material-ui/core/styles';

interface ProductComponentProps {
  productIndex: string;
  product: Product;
}

export const ProductComponent: React.FunctionComponent<ProductComponentProps> = (props) => {
  const { productIndex, product } = props;
  const theme = useTheme();
  return (
    <>
      {product.portions.length > 1 ? (
        <>
          <strong>{product.name}</strong>
              {product.description !== '' && (
                <p className={classes.description}>{product.description}</p>
              )}
            {product?.portions.map((p, index) => (
              <div key={`portion-${productIndex}-${index}`} className={classes.product}>
                <dt className={classes.portion}>{p.name}</dt>
                <dd className={classes.price} style={{ color: theme.palette.primary.main }}>
                  {p.price}
                </dd>
              </div>
            ))}
          </dl>
        </>
      ) : (
        <>
          <dl className={classes.product}>
            <dt className={classes.portion}>
              <strong>{product.name}</strong>
              {product.description !== '' && (
                <p className={classes.description}>{product.description}</p>
              )}
            <dd className={classes.price} style={{ color: theme.palette.primary.main }}>
              {product.portions[0].price}
            </dd>
          </dl>
        </>
      )}
    </>
  );
};

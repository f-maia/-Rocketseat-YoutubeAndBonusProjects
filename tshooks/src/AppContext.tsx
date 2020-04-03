import React, { useContext, useReducer } from 'react';
import CartContext from './CartContext';

// import { Container } from './styles';

interface Cart {
  products: string[],
  shipping_value?: number;
}

type CartActionType = {
  type: 'ADD_PRODUCT' | "REMOVE_PRODUCT"
}

const AppContext: React.FC = () =>  {
  const cart = useReducer(
    (state: Cart, action: CartActionType ) => {
      switch(action.type) {
        case "ADD_PRODUCT": return {...state, products: [...state.products, 'Produto novo']}
        default: return state;
      }
    },
    { products: ['asd'], shipping_value: 0 },
  )

  const { products } = useContext(CartContext);

  return (
    <div>
      {products.map(product => <li key={product.id}>{product.name}</li>)}
    </div>
  );
}

export default AppContext;
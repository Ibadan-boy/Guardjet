import { createContext, useReducer} from 'react';
import { dummyProducts } from '../util/data';

export const CartContext = createContext({
    items: [],
    addItemToCart: ()=> {},
    updateCartItemQuantity: ()=> {}
});


//reducer function
function shoppingCartReducer(state, action){
  //if we're adding item
  if(action.type=== 'ADD_ITEM'){
    const updatedItems = [...state.items];

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      const existingCartItem = updatedItems[existingCartItemIndex];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        // const product = dummyProducts.find((product) => product.id === action.payload);
        updatedItems.push({
          id: action.payload.id,
          name: action.payload.title,
          price: action.payload.price,
          quantity: 1,
        });
      }

      return {
        ...state,
        items: updatedItems,
      };
  };
   
  if(action.type=== 'UPDATE_ITEM'){
      const updatedItems = [...state.items];
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.productId
      );

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      };

      updatedItem.quantity += action.payload.amount;

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1);
      } else {
        updatedItems[updatedItemIndex] = updatedItem;
      }

      return {
        ...state,
        items: updatedItems,
      };
    
  }
  return state
      
}



export default function CartContentProvider({ children }){

    const [ shoppingCartState, shoppingCartDispatch ] = useReducer(
      shoppingCartReducer,
      {
        items: []
      }
    )

  
    

  function handleAddItemToCart(product){

    shoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: product
    });
 }
  
 function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM',
      payload: {
        productId,
        amount
      }
    })
  }

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity
  }

  return(
    <CartContext.Provider value={ctxValue}>
        {children}
    </CartContext.Provider>
  )

}
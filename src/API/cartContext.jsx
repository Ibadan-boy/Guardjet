import { createContext, useReducer, useEffect } from 'react';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateCartItemQuantity: () => {},
  clearCart: () => {}
});

// Reducer function (unchanged)
function shoppingCartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
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
  }

  if (action.type === 'CLEAR_CART') {
    return {
      ...state,
      items: [],
    };
  }

  if (action.type === 'UPDATE_ITEM') {
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

  return state;
}

export default function CartContentProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: (() => {
        try {
          const savedItems = localStorage.getItem('cartItems');
          return savedItems ? JSON.parse(savedItems) : [];
        } catch (e) {
          console.error('Failed to load from localStorage:', e);
          return [];
        }
      })()
    }
  );

  // Sync cart state to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('cartItems', JSON.stringify(shoppingCartState.items));
    } catch (e) {
      console.error('Failed to save to localStorage:', e);
    }
  }, [shoppingCartState.items]);

  function handleAddItemToCart(product) {
    shoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: product,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: 'UPDATE_ITEM',
      payload: {
        productId,
        amount,
      },
    });
  }

  function handleClearCart() {
    shoppingCartDispatch({ type: 'CLEAR_CART' });
  };

  const ctxValue = {
    items: shoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateCartItemQuantity: handleUpdateCartItemQuantity,
    clearCart: handleClearCart
  };

  return (
    <CartContext.Provider value={ctxValue}>
      {children}
    </CartContext.Provider>
  );
}
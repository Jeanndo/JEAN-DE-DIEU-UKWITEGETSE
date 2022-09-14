import * as type from "./../Actions/Types/ActionTypes.js";

const initialState = {
  products: [] /*==={id,brand,name,decription,price,img}===*/,
  cart: [] /*==={id,brand,name,decription,price,img}===*/,
  currentItem: null,
};

export const shopping = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TO_CART:
      /*=======get added product data from product array========*/

      const currentProduct = [...state.products];
      currentProduct.push(action.payload.product);

      const product = currentProduct.find(
        (product) => product.id === action.payload.id
      );

      /*=========check if the item is in the cart already=========*/

      const inCart = state.cart.find((product) =>
        product.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((product) =>
              product.id === action.payload.id
                ? { ...product, qty: product.qty + 1 }
                : product
            )
          : [...state.cart, { ...product, qty: 1 }],
      };

    case type.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id),
      };
    case type.ADJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((product) =>
          product.id === action.payload.id
            ? { ...product, qty: +action.payload.qty }
            : product
        ),
      };

    case type.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
};

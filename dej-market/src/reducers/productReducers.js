import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
  } from '../constants/productConstants';
  
//This defines a Redux reducer productListReducer that manages the state of a product list by handling different action types like request, success, and fail, with default values set to an empty products array and updating the state accordingly.

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true, products: [] }
      case PRODUCT_LIST_SUCCESS:
        return {
          loading: false,
          products: action.payload
        }
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }


export const productDetailsReducer = (state = { product: {reviews: []} }, action) => {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { loading: true, ...state }
      case PRODUCT_DETAILS_SUCCESS:
        return {
          loading: false,
          product: action.payload
        }
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
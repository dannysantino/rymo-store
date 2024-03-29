import * as actionTypes from '../constants/productConstants'
import axios from 'axios'

export const getProducts = () => async dispatch => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });
        const { data } = await axios.get('/api/products');
        dispatch({
            type: actionTypes.GET_PRODUCTS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_PRODUCTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const getItem = id => async dispatch => {
    try {
        dispatch({ type: actionTypes.GET_ITEM_REQUEST });
        const { data } = await axios.get(`/api/products/${id}`);
        dispatch({
            type: actionTypes.GET_ITEM_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ITEM_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });
    }
}

export const removeItem = () => dispatch => {
    dispatch({ type: actionTypes.GET_ITEM_RESET });
}
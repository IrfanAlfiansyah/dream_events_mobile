import axios from '../../utils/axios';

export const getDataWishlist = () => {
  return {
    type: 'GET_DATA_WISHLIST',
    payload: axios.get(
      'wishlist?userId=990d550d-5a35-4cb0-b9b8-ccf1215dee19&page=1&limit=10',
    ),
  };
};

export const createDataEvent = data => {
  return {
    type: 'CREATE_DATA_WISHLIST',
    payload: axios.post('wishlist', data),
  };
};

export const deleteDataEvent = wishlistId => {
  return {
    type: 'DELETE_DATA_WISHLIST',
    payload: axios.delete(`wishlist/${wishlistId}`),
  };
};

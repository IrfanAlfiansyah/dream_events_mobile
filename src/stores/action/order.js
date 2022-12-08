// export conxx
import axios from '../../utils/axios';

export const createOrder = body => {
  return {
    type: 'CREATE_ORDER',
    payload: axios.post('booking', body),
  };
};

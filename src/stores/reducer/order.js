const initialState = {
  order: {},
};
const createOrder = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_ORDER':
      console.log(action, 'STATE');
      return {
        order: action.payload,
      };

    default:
      return state;
  }
};

export default createOrder;

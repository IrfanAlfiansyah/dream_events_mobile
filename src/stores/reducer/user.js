const initialState = {
  isLoading: false,
  isError: false,
  data: {},
  message: '',
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER_BY_ID_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'GET_USER_BY_ID_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data[0],
        message: action.payload.data.message,
      };
    }
    case 'GET_USER_BY_ID_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    }
    case 'LOGOUT_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'LOGOUT_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: {},
        message: action.payload.data.message,
      };
    }
    case 'LOGOUT_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: action.payload.response.data.message,
      };
    }
    case 'UPDATE_PROFILE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'UPDATE_PROFILE_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case 'UPDATE_PROFILE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    }
    case 'UPDATE_PWD_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'UPDATE_PWD_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        message: action.payload.data.message,
      };
    }
    case 'UPDATE_PWD_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.response.data.message,
      };
    }
    case 'REGISTRATION_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: '',
      };
    }
    case 'REGISTRATION_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        message: action.payload.data.message,
      };
    }
    case 'REGISTRATION_REJECTED': {
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: action.payload.response.data.message,
      };
    }
    default: {
      return state;
    }
  }
};

export default user;

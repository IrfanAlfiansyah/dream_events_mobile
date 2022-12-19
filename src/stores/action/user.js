import axios from '../../utils/axios';

export const getUserById = userId => {
  return {
    type: 'GET_USER_BY_ID',
    payload: axios.get(`user/${userId}`),
  };
};

export const updateProfile = (userId, form) => {
  return {
    type: 'UPDATE_PROFILE',
    payload: axios.patch(`/user/updateUser/${userId}`, form),
  };
};

export const updateImage = (userId, body) => {
  return {
    type: 'UPDATE_IMAGE',
    payload: axios.patch(`user/updateImage/${userId}`, body),
  };
};

export const updatePwd = (userId, form) => {
  return {
    type: 'UPDATE_PASSWORD',
    payload: axios.patch(`user/updatePassword/${userId}`, form),
  };
};
export const forgotPwd = body => {
  return {
    type: 'FORGOT_PASSWORD',
    payload: axios.post('auth/forgotPassword', body),
  };
};
export const registration = form => {
  return {
    type: 'REGISTRATION',
    payload: axios.post('auth/register', form),
  };
};

import axios from '../../utils/axios';

export const getUserById = userId => {
  return {
    type: 'GET_USER_BY_ID',
    payload: axios.get(`user/${userId}`),
  };
};

export const logout = refreshToken => {
  return {
    type: 'LOGOUT',
    payload: axios.post('auth/logout', {refreshToken}),
  };
};

export const updateProfile = (userId, form) => {
  return {
    type: 'UPDATE_PROFILE',
    payload: axios.patch(`user/profile/${userId}`, form),
  };
};

export const updatePwd = (userId, form) => {
  return {
    type: 'UPDATE_PASSWORD',
    payload: axios.patch(`user/updatePassword/${userId}`, form),
  };
};

export const registration = form => {
  return {
    type: 'REGISTRATION',
    payload: axios.post('auth/register', form),
  };
};

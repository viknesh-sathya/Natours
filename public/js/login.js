import axios from 'axios';
import { showAlert } from './alert';
export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (res.data.status === 'success') {
      showAlert('success', 'You are now logged in');
      window.setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }
  } catch (err) {
    console.log('🤷Error', err);
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: '/api/v1/users/logout',
    });
    if (res.data.status === 'success') location.reload(true);
  } catch (err) {
    console.log('🤷Error', err);
    showAlert('error', 'Failed to logout');
  }
};

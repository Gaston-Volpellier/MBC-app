import axios from 'axios';
import {API_URL} from '@env';
import {hashPassword} from './functions';
import qs from 'qs';

const baseUrl = API_URL;

export const login = async (email: String, clave: String) => {
  const data = {email: email, clave: hashPassword(clave)};

  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/login.php`,
  };

  try {
    const response = await axios(options);
    console.log('Login data ', response.data);
    return response.data;
  } catch (error) {
    console.error('Login Error: ', error);
  }
};

export const googleLogin = async (google_id: String, email: String) => {
  const data = {google_id: google_id, email: email};

  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/login-google.php`,
  };

  try {
    const response = await axios(options);
    console.log('Google Login Data: ', response.data);

    return response.data;
  } catch (error) {
    console.error('Login Error: ', error);
    return false;
  }
};

export const serverLogout = async (token: String) => {
  const data = {token: token};

  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/salir.php`,
  };

  try {
    const response = await axios(options);
    console.log('Logout response: ', response.data);
    return response.data;
  } catch (error) {
    console.error('Logout Error: ', error);
  }
};

export const register = async (
  nombre: String,
  email: String,
  fecha_nac: String,
  password: String,
) => {
  const parts = fecha_nac.split('/');
  const fn =
    parts.length == 3 ? parts[2] + '-' + parts[1] + '-' + parts[0] : null;
  const data = {
    nombre: nombre,
    email: email,
    fecha_nac: fn,
    password: hashPassword(password),
  };

  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/registro.php`,
  };
  try {
    const response = await axios(options);
    console.log('Register config: ', response.config);
    console.log('Register Data: ', response.data);

    return response.data;
  } catch (error) {
    console.error('Register Error: ', error);
  }
};

export const editProfile = async (
  token: String,
  name: String,
  email: String,
  phone: String,
  birthDate: String,
) => {
  const parts = birthDate.split('/');
  const fn =
    parts.length == 3 ? parts[2] + '-' + parts[1] + '-' + parts[0] : null;

  const data = {
    token: token,
    nombre: name,
    email: email,
    telefono: phone,
    fecha_nac: fn,
  };

  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/cambiar-datos.php`,
  };

  try {
    const response = await axios(options);
    console.log('Edit api: ', response);
    console.log('Edit Config: ', response.config);

    console.log('Edit data: ', response.data);

    return response.data;
  } catch (error) {
    console.error('Edit Error: ', error);
  }
};

export const passwordReset = async (code: String, password: String) => {
  const data = {
    codigo: code,
    clave: hashPassword(password),
  };

  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/cambiar-clave.php`,
  };
  try {
    const response = await axios(options);

    console.log('Password reset Config: ', response.config);

    console.log('Password reset response: ', response.data);

    return response.data;
  } catch (error) {
    console.error('Password reset Error: ', error);
    console.error('Edit Error: ', error);
  }
};

export const notifications = async (
  token: String,
  promos: boolean,
  email: boolean,
) => {
  const data = {
    token: token,
    promociones: promos,
    mail: email,
  };

  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/cambiar-nots.php`,
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error('Notifications Error: ', error);
  }
};

export const deleteAccount = async (token: String) => {
  const data = {token: token};

  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/borrar-cuenta.php`,
  };

  try {
    const response = await axios(options);
    console.log('Delete account request: ', response);
    console.log('Delete account response: ', response.data);
    return response.data;
  } catch (error) {
    console.error('Delete account Error: ', error);
  }
};

export const passwordRecover = async (email: String) => {
  const data = {email: email};
  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/recuperar.php`,
  };

  try {
    const response = await axios(options);
    console.log('Password recovery response: ', response.data);
    return response.data;
  } catch (error) {
    console.error('Password recovery Error: ', error);
  }
};

export const validateCode = async (code: String) => {
  const data = {codigo: code};
  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/validar-codigo.php`,
  };

  try {
    const response = await axios(options);

    console.log('Validate code response: ', response);

    return response.data;
  } catch (error) {
    console.error('Validate code Error: ', error);
  }
};

export const passwordResetByCode = async (code: String, password: String) => {
  const data = {codigo: code, clave: hashPassword(password)};
  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/cambiar-clave-codigo.php`,
  };

  try {
    const response = await axios(options);
    console.log('Password reset by code Config: ', response.config);
    console.log('Password reset by code Data: ', response.data);

    return response.data;
  } catch (error) {
    console.error('Password reset by code Error: ', error);
  }
};

export const fetchOffers = async () => {
  try {
    const response = await axios.get(`${baseUrl}/promociones.php`);
    return response.data;
  } catch (error) {
    console.error('Error fetching offers: ', error);
  }
};

export const generateCoupon = async (token: String, promoId: Number) => {
  const data = {token: token, promocion_id: promoId};

  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/obtener-codigo.php`,
  };

  try {
    const response = await axios(options);

    console.log('Coupon data: ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error generating coupon: ', error);
  }
};

export const fetchCoupon = async (token: String, couponId: String) => {
  const data = {token: token, cupon_id: couponId};

  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/obtener-cupon.php`,
  };
  try {
    const response = await axios(options);

    console.log('Code fetched: ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching coupon: ', error);
  }
};

export const fetchHistory = async (token: String, status: Number) => {
  const data = {token: token, estado: 0};

  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/historial.php`,
  };

  try {
    const response = await axios(options);

    console.log('Coupon history: ', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching history: ', error);
  }
};

export const fetchStores = async () => {
  try {
    const response = await axios.get(`${baseUrl}/locales.php`);
    return response.data;
  } catch (error) {
    console.error('Error fetching stores: ', error);
  }
};

export const scanCoupon = async (token: String, coupon: String) => {
  const data = {token: token, cupon: coupon};

  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/escanear-cupon.php`,
  };

  try {
    const response = await axios(options);

    return response.data;
  } catch (error) {
    console.error('Error scanning coupon: ', error);
  }
};

export const validateCoupon = async (token: String, coupon: String) => {
  const data = {token: token, cupon: coupon};

  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/validar-cupon.php`,
  };

  try {
    const response = await axios(options);

    return response.data;
  } catch (error) {
    console.error('Error validating coupon: ', error);
  }
};

export const fetchAd = async (token: String) => {
  const data = {token: token};

  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/ver-publicidad.php`,
  };

  try {
    const response = await axios(options);

    return response.data;
  } catch (error) {
    console.error('Error fetching ad: ', error);
  }
};

export const fetchSocialTerms = async () => {
  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    url: `${baseUrl}/redes-sociales.php`,
  };

  try {
    const response = await axios(options);

    return response.data;
  } catch (error) {
    console.error('Error fetching social: ', error);
  }
};

export const validateApi = async (token: String) => {
  const data = {token: token};

  const options = {
    method: 'POST',
    headers: {'content-type': 'application/x-www-form-urlencoded'},
    data: qs.stringify(data),
    url: `${baseUrl}/validar-token.php`,
  };

  try {
    const response = await axios(options);

    return response.data;
  } catch (error) {
    console.error('Error fetching validate: ', error);
  }
};

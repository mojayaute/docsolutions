import http from "../http_common";

const token = localStorage.getItem('token');

const save = (data) => {
    const body = {
        Body: data
      };
    return http.post('user/RegisterUserRole', body, { headers: { Authorization: `Bearer ${token}` } });
};

const getAll = (data) => {
    return http.post('/user/GetUsers', data, { headers: { Authorization: `Bearer ${token}` } });
};

export default {
    save,
    getAll
};

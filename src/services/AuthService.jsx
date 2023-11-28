import http from "../http_common";

const login = data => {
    return http.post("/authentication/authentication", data);
};

export default {
    login
};

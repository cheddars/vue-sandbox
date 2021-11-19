export const isAuthenticated = () => {
    // const token = localStorage.getItem("access_token");
    return true;
  }

export const getUser = () => {
    var token = localStorage.getItem("access_token");

    return JSON.parse(token);
}


export const isAuthenticated = () => {
    const isLogin = localStorage.getItem("is_login")
    console.log(isLogin)
    return isLogin === 'true'
}
 
export const getUser = () => {
    var token = localStorage.getItem("user_info");

    return JSON.parse(token);
}


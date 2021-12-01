export const fetchRegister = async (registerData) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/register`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        withCredentials: true,
        credentials: 'include',
        body: JSON.stringify(registerData)
    });
};

export const fetchLogIn = async (loginData) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/login`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        withCredentials: true,
        credentials: 'include',
        body: JSON.stringify(loginData)
    });
};

export const fetchLogOut = async () => {
    return await fetch(`${process.env.REACT_APP_SERVER}/logout`, {
        method: "GET",
        withCredentials: true,
        credentials: 'include',
    });
};

export const checkUser = async () => {
    return await fetch(`${process.env.REACT_APP_SERVER}/user`, {
        method: "GET",
        withCredentials: true,
        credentials: 'include',
    });
};

// export const checkUser = async () => {
//     const response = await fetch(`${process.env.REACT_APP_SERVER}/user`, {
//         method: "GET",
//         withCredentials: true,
//         credentials: 'include',
//     });
//     const data = await response.json();
//     return data;
// }
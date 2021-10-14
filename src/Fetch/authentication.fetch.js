export const fetchRegister = async (registerData) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/register`, {
        method: "POST",
        withCredentials: true,
        credentials: 'include',
        body: JSON.stringify(registerData)
    });
    const data = await response.json();
    return data;
};

export const fetchLogIn = async (loginData) => {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/login`, {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        withCredentials: true,
        credentials: 'include',
        body: JSON.stringify(loginData)
    });
    const data = await response.json();
    return data;
};

export const fetchLogOut = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/logout`, {
        method: "GET",
        withCredentials: true,
        credentials: 'include',
    });
    const data = await response.json();
    return data;
};

export const checkUser = async () => {
    const response = await fetch(`${process.env.REACT_APP_SERVER}/user`, {
        method: "GET",
        withCredentials: true,
        credentials: 'include',
    });
    const data = await response.json();
    return data;
}
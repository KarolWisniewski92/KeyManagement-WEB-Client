export const fetchKeysData = async (set) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/getKeysData?set=${set}`, {
        method: "GET",
        withCredentials: true,
        credentials: 'include'
    });
};

export const fetchMyKeysData = async (userID) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/getMyKeysData?user_id=${userID}`, {
        method: "GET",
        withCredentials: true,
        credentials: 'include'
    });

}

export const fetchIsTakenByUpdate = async (data) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/isTakenByUpdate`, {
        method: "POST",
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}
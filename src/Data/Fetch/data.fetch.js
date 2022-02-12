//Gets all key for selected set
export const fetchKeysData = async (set) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/getKeysData?set=${set}`, {
        method: "GET",
        withCredentials: true,
        credentials: 'include'
    });
};

//Get key data
export const fetchKeyData = async (keyID) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/getKeyData?keyID=${keyID}`, {
        method: "GET",
        withCredentials: true,
        credentials: 'include'
    });
};

//Get all keys taken by the indicated user
export const fetchMyKeysData = async (userID) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/getMyKeysData?user_id=${userID}`, {
        method: "GET",
        withCredentials: true,
        credentials: 'include'
    });

}

// Get key by user
export const fetchGetKey = async (data) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/getKey`, {
        method: "POST",
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

// Return key by user
export const fetchReturnKey = async (data) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/returnKey`, {
        method: "POST",
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

//Get users that match to your search
export const fetchFindUserToTransfer = async (user) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/findUserToTransfer?user=${user}`, {
        method: "GET",
        withCredentials: true,
        credentials: 'include'
    });
}


//Update isTransferedTo by indicated user
export const fetchIsTransferedToUpdate = async (data) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/isTransferedToUpdate`, {
        method: "POST",
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const fetchKeysTrasferedToMe = async (user) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/keysTransferedToMe?user=${user}`, {
        method: "GET",
        withCredentials: true,
        credentials: 'include'
    });
}
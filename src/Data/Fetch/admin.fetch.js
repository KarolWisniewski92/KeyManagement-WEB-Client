// Add new key
export const fetchAddNewKey = async (data) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/addNewKey`, {
        method: "POST",
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
};
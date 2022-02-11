//Get all history for key
export const fetchKeyHistory = async (keyID) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/getKeyHistory?keyID=${keyID}`, {
        method: "GET",
        withCredentials: true,
        credentials: 'include'
    });
};
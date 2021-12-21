export const fetchKeysData = async (set) => {
    return await fetch(`${process.env.REACT_APP_SERVER}/getKeysData?set=${set}`, {
        method: "GET",
        withCredentials: true,
        credentials: 'include'
    });
}
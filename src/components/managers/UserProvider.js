import { getToken } from "./TokenManager"

export const createUser = ( user ) => {
    return fetch("http://localhost:8000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
}
export const loginUser = (user) => {
    return fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
}
export const getMyProfile =() => {
    let token = getToken()
    return fetch(`http://localhost:8000/connexionusers/my_profile`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
import { getToken } from "./TokenManager"

export const getUserProfile =(id) => {
    let token = getToken()
    return fetch(`http://localhost:8000/connexionusers/${id}`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
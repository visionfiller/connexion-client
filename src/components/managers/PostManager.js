import { getToken } from "./TokenManager"

export const getAllPosts =() => {
    let token = getToken()
    return fetch(`http://localhost:8000/posts`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
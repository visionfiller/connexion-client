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
export const addNewPost= (newPost) => {
    let token = getToken()
    return fetch(`http://localhost:8000/posts`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    })
        .then(response => response.json())
}
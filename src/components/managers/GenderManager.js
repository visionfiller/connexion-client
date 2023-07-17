import { getToken } from "./TokenManager"


export const getGenders =() => {
    let token = getToken()
    return fetch(`http://localhost:8000/genders`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
export const getOrientations =() => {
    let token = getToken()
    return fetch(`http://localhost:8000/orientations`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
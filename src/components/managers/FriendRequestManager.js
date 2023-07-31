import { getToken } from "./TokenManager"


export const sendFriendRequest= (id) => {
    let token = getToken()
    return fetch(`http://localhost:8000/connexionusers/${id}/send_friend_request`, {
        method: "POST",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
 export const getUserFriendRequests = () => {
    let token = getToken()
    return fetch(`http://localhost:8000/friendrequests/myfriendrequests`, {
        headers:{
            "Authorization": `Token ${token}`,
             "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
 }

 export const approveFriendRequest= (id) => {
    let token = getToken()
    return fetch(`http://localhost:8000/friendrequests/${id}/approve`, {
        method: "PUT",
        headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
}
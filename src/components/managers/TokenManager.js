export const getToken=() => {
    const ConnexionUser = localStorage.getItem("connexion_user")
    const ConnexionUserObject = JSON.parse(ConnexionUser)
    return ConnexionUserObject.auth_token
}

import { createContext, useEffect, useState } from "react";
import { getGenders, getOrientations } from "./GenderManager";
import { getMyProfile } from "./UserProvider";

export const ProfileContext = createContext()
export const ProfileProvider = (props) => {
const [genders, setGenders] = useState([])
const [orientations, setOrientations] = useState([])
const [connexionUser, setConnexionUser] = useState({})
useEffect(()=>{
 getGenders().then((data)=> setGenders(data))
 getOrientations().then((data)=> setOrientations(data))
getMyProfile().then((data)=> setConnexionUser(data))
},[])


return(
<ProfileContext.Provider value={{
   genders, orientations, connexionUser
}}>
    {props.children}
</ProfileContext.Provider>
)
}
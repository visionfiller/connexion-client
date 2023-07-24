import { createContext, useEffect, useState } from "react";
import { getGenders, getOrientations } from "./GenderManager";

export const ProfileContext = createContext()
export const ProfileProvider = (props) => {
const [genders, setGenders] = useState([])
const [orientations, setOrientations] = useState([])
useEffect(()=>{
 getGenders().then((data)=> setGenders(data))
 getOrientations().then((data)=> setOrientations(data))

},[])


return(
<ProfileContext.Provider value={{
   genders, orientations
}}>
    {props.children}
</ProfileContext.Provider>
)
}
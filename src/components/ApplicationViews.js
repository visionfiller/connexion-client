import { Route, Routes } from "react-router-dom"
import { Home } from "./home/Home"
import { MyProfile } from "./myprofile/MyProfile"
import { ProfileDetails } from "./profiles/ProfileDetails"

export const ApplicationViews = () => {
    return <>
    
    <Routes>
     
        <Route path="/home" element={<Home/>} />
        <Route path = "/myprofile" element={<MyProfile />} />
        <Route path = "/profiles/:connexion_user" element={<ProfileDetails/>} />
 
    </Routes>
  
</>
}
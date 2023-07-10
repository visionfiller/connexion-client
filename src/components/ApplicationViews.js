import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"
import { MyProfile } from "./myprofile/MyProfile"

export const ApplicationViews = () => {
    return <>
    
    <Routes>
     
        <Route path="/home" element={<Home/>} />
        <Route path = "/myprofile" element={<MyProfile />} />
 
    </Routes>
  
</>
}
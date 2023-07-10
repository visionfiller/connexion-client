import { Route, Routes } from "react-router-dom"
import { Home } from "./Home"

export const ApplicationViews = () => {
    return <>
    
    <Routes>
     
        <Route path="/home" element={<Home/>} />

    </Routes>
  
</>
}
import { useEffect, useState } from "react"
import { getMyProfile } from "../managers/UserProvider"
import { ProfileBox } from "../profiles/ProfileBox"

export const MyProfile = () => {
    const [profile, setProfile] = useState({})
    useEffect(()=> {
        getMyProfile().then((data) => setProfile(data))
    },[])



    return <>
    <ProfileBox profile={profile} />
    
    
    
    
    
    </>
}
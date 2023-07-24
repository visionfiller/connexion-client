import { useContext, useEffect, useState } from "react"
import { ProfileContext } from "../managers/ContextProvider"
import { getGenders, getOrientations } from "../managers/GenderManager"
import { getMyProfile } from "../managers/UserProvider"
import { ProfileBox } from "../profiles/ProfileBox"
import { ProfileForm } from "../profiles/UpdateProfile"

export const MyProfile = () => {
    const [profile, setProfile] = useState({})
   
    const {genders, orientations} = useContext(ProfileContext);
    useEffect(() => {
        getProfile()
       
    }, [])

    const getProfile = () => {
        getMyProfile().then((data) => setProfile(data)

        )
    }


    return <>
        <ProfileBox genders={genders} orientations={orientations} profile={profile} />
        <ProfileForm genders={genders} orientations={orientations}  myProfile={profile} getProfile={getProfile} />





    </>
}
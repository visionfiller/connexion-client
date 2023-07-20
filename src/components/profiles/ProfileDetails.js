import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserProfile } from "../managers/ProfileManager"
import {Box, Image} from '@chakra-ui/react'

export const ProfileDetails= ()=> {
    const { connexion_user } = useParams()
    const [user, setUser] = useState({})
useEffect(()=>{
    if (connexion_user !== ""){
       
    getUserProfile(connexion_user).then((data) => setUser(data))
}
getUserProfile(1)
},[connexion_user])

return<>
<Box>{user.full_name}</Box>
<Image objectFit="cover" h="50%" w="full" src={user.profile_picture} />
</>
}
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserProfile } from "../managers/ProfileManager"
import {Box, Image, Heading} from '@chakra-ui/react'

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

<Box><Heading>{user.full_name}</Heading>
<Box w="400px"><Image src={user.profile_picture} /></Box>
</Box>

</>
}
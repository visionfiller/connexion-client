import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserProfile } from "../managers/ProfileManager"
import {Box, Image, Heading, Flex} from '@chakra-ui/react'
import { ProfileBox } from "./ProfileBox"
import { ProfileContext } from "../managers/ContextProvider"

export const ProfileDetails= ()=> {
    const { connexion_user } = useParams()
    const [user, setUser] = useState({})
    const {genders, orientations} = useContext(ProfileContext);

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
<Box><Heading>My Friends</Heading></Box>
<Flex>
{user?.friends?.map((friend)=>{
    return <ProfileBox profile={friend} genders={genders} orientations={orientations}/>
})}
</Flex>
</>
}
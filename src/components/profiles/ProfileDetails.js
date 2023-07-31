import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getUserProfile } from "../managers/ProfileManager"
import {Box, Image, Heading, Flex, Button} from '@chakra-ui/react'
import { ProfileBox } from "./ProfileBox"
import { ProfileContext } from "../managers/ContextProvider"
import { sendFriendRequest } from "../managers/FriendRequestManager"

export const ProfileDetails= ()=> {
    const { connexion_userId } = useParams()
    const [user, setUser] = useState({})
    const {genders, orientations, connexionUser } = useContext(ProfileContext);
    const[loading, isLoading] = useState(true)

useEffect(()=>{
    if (connexion_userId!== ""){
       
    getUserProfile(connexion_userId).then((data) => setUser(data))
    isLoading(false)
}
getUserProfile(1)
},[connexion_userId])

const FriendsOrNo = (user)=> {
    let found = user.friends?.find((friend)=> friend.user === connexionUser.user)
    if (found){
        return <Button>Friends</Button>
    }
       
    
    return <Button onClick={()=> sendFriendRequest(parseInt(connexion_userId))}>Send a Friend Request</Button>
}

return<>

<Box>
<Heading>{user.full_name}</Heading>
<Box w="400px"><Image src={user.profile_picture} /></Box>
{FriendsOrNo(user)}
</Box>
<Box><Heading>My Friends</Heading></Box>
<Flex>
{user?.friends?.map((friend)=>{
    return <ProfileBox profile={friend} genders={genders} orientations={orientations}/>
})}
</Flex>
</>
}
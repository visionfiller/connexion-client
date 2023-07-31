import { Box, Button, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getUserFriendRequests, approveFriendRequest } from "../managers/FriendRequestManager"

export const FriendRequests = ({getProfile}) => {
    const [requests, setRequests] = useState([])

    useEffect(()=> {
getRequests()
    },[])
const getRequests = () => {
    getUserFriendRequests().then((data)=> setRequests(data))

}
const approveOrDeny=(id)=> {
approveFriendRequest(id).then(()=> getProfile() & getRequests())
}

    return <>
    <Heading>My Friend Requests</Heading>
    <Box >
   {requests.map((request) => {
   return <>
   <Link to={`/profiles/${request.connexion_user_from.user}`}><div>{request.connexion_user_from.full_name}</div></Link>
   <Button onClick={(()=> approveOrDeny(request.id))}>Approve</Button>
   <Button>Deny</Button>
   </>
   })}
   </Box>
    </>
}
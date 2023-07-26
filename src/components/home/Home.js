import { Heading, Box, Card, Image, CardBody, Stack, Text, CardFooter, Button} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getAllPosts, getFriendsPosts } from '../managers/PostManager'
import { PostList } from './PostList'
import { SubmitForm } from './SubmitPost'

export const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])
    const sortByMostRecent = (a, b) => {
        const dateA = new Date(a.formatted_date);
        const dateB = new Date(b.formatted_date);
        return dateB - dateA; // Return the difference between dateB and dateA to sort in descending order
      };
    const getPosts = () => {
        getFriendsPosts().then((data) => 
        {
        let sortedData = data.sort(sortByMostRecent)
        setPosts(sortedData)})
    }



    return <>
    <Box><SubmitForm getPosts={getPosts}/></Box>
        {posts.map((post) => {
            return <Box w="50%"mx="auto"><PostList post={post}/></Box>
        })}
    </>
}
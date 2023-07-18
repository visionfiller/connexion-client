import { Heading, Box, Card, Image, CardBody, Stack, Text, CardFooter, Button} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { getAllPosts } from '../managers/PostManager'
import { PostList } from './PostList'
import { SubmitForm } from './SubmitPost'

export const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        getAllPosts().then((data) => setPosts(data))
    }, [])




    return <>
    <Box><SubmitForm /></Box>
        {posts.map((post) => {
            return <Box w="50%"mx="auto"><PostList post={post}/></Box>
        })}
    </>
}
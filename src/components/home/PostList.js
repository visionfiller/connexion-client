import { IconButton, Box, Badge, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, ButtonGroup } from '@chakra-ui/react'
import { StarIcon, Search2Icon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'


export const PostList = ({post}) => {
    return <>
    <Card
                    direction={{ base: 'column', sm: 'row' }}
                    overflow='hidden'
                    variant='outline'
                >
                    <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={post.image}
                    />

                    <Stack>
                        <CardBody>
                            <Link to={`/profiles/${post.connexion_user.user}`}><Heading size='md'>{post?.connexion_user?.full_name}</Heading></Link>

                            <Text py='2'>
                                {post.body}
                            </Text>
                            <Text py='2'>
                                {post.formatted_date}
                            </Text>
                        </CardBody>

                        <CardFooter>
                            <Button variant='solid' colorScheme='blue'>
                                Like
                            </Button>
                            <Button>Delete</Button>
                        </CardFooter>
                    </Stack>
                </Card>
    </>
}
import { IconButton, Box, Badge, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, ButtonGroup } from '@chakra-ui/react'
import { StarIcon, Search2Icon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export const ProfileBox = ({ profile, genders, orientations }) => {
  const profileOrientation = (id) => {
    let foundOrientation = orientations.find((orientation) => orientation.id === id)
    if (foundOrientation) { return foundOrientation.label }
  }
  const profileGender = (id) => {
    let foundGender = genders.find((gender) => gender.id === id)
    if (foundGender) { return foundGender.label }
  }

  return <Box boxShadow="sm" bg="gray.200" height="300px" w="350px" borderWidth='1px' borderRadius='lg' overflow='hidden'>

    <Image objectFit="cover" h="50%" w="full" src={profile.profile_picture} />

    <Box p='6'>
      <Box display='flex' alignItems='baseline'>

        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          ml='2'
        >
          <Link to={`/profiles/${profile.user}`}>{profile.full_name}</Link> 
        </Box>
      </Box>
      <Box
        color='gray.500'
        fontWeight='semibold'
        letterSpacing='wide'
        fontSize='xs'
        textTransform='uppercase'
        ml='2'
      >
        {profileOrientation(profile.orientation) } {profileGender(parseInt(profile.gender))}
      </Box>
      <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        noOfLines={1}
      >
        {profile.bio}
      </Box>

    </Box>

  </Box>
}
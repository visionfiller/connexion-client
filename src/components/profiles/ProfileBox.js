import { IconButton, Box, Badge, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, ButtonGroup } from '@chakra-ui/react'
import { StarIcon, Search2Icon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

export const ProfileBox= ({profile}) => {
 

    return <Box boxShadow="sm" bg="gray.200"height="300px" w="350px" borderWidth='1px' borderRadius='lg' overflow='hidden'>
     
<Image objectFit="cover"  h="50%" w="full" src={profile.profile_picture} />

    <Box  p='6'>
      <Box display='flex' alignItems='baseline'>
        
        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          ml='2'
        >
          {profile.full_name}
        </Box>
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
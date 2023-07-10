import { useContext, useEffect, useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  ButtonGroup,
  useDisclosure,
  Divider
} from '@chakra-ui/react'



export const NavBar = () => {
  const navigate = useNavigate()
  const ConnexionUser = localStorage.getItem("connexion_user")
  const ConnexionUserObject = JSON.parse(ConnexionUser)


  const handleLogout = () => {
    localStorage.removeItem("connexion_user");
    window.location.href = "/login";

  }
  return <>
   
    <Box position="relative"bg="white" px={4} py={2} color="black" borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.900')}>
      <Flex justifyContent="space-between">
        <Link to="/">
          <Text textColor="gray.600" letterSpacing='wide'fontSize="3xl" fontWeight="bold">
            Connexion
          </Text>
        </Link>
        <Flex gap="16" alignItems="baseline" position="absolute" bottom="0" right="3">
         
            
      

          <Link mr={4} to="/home"><Text fontWeight='semibold'
              letterSpacing='wide'
              fontSize='md'
              color="teal"
              textTransform='uppercase'>Home</Text></Link>
          <Link to="/myprofile"><Text fontWeight='semibold'
              letterSpacing='wide'
              fontSize='md'
              color="teal"
              textTransform='uppercase'>my profile</Text></Link>

            {ConnexionUserObject ? <>
              <Link onClick={() => handleLogout()}><Text 
              
              letterSpacing='wide'
              fontWeight='semibold'
              fontSize='md'
              color="teal"
              textTransform='uppercase'>logout</Text></Link>
            </>
              : <>
              <ButtonGroup p="2">
                <Button
                size="sm"
                  onClick={() => navigate("/login")}
                 
                  letterSpacing='wide'
                  fontWeight='semibold'
                  fontSize='md'
                  color="teal"
                  textTransform='uppercase'>
                  
                  
                  Sign In
                </Button>
               <Box borderLeft="2px" borderColor="teal"></Box>
                <Button
                  onClick={() => navigate("/register")}
                  size="sm"
                  letterSpacing='wide'
                  fontWeight='semibold'
                  fontSize='md'
                  color="teal"
                  textTransform='uppercase'>
                  
                  
                  Sign up
                </Button>
                </ButtonGroup>
              </>}
     
        </Flex>
      </Flex>
    </Box>
  </>
}
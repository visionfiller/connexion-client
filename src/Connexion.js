import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Authorized } from "./components/auth/Authorized"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Home } from "./components/home/Home"
import { ApplicationViews } from "./components/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { ProfileProvider } from "./components/managers/ContextProvider"




export const Connexion= () => {
  const [token, setTokenState] = useState(localStorage.getItem('connexion_user'))
	
  
	const setToken = (auth_token) => {
	let token = {
		"auth_token": auth_token
	}
	
	localStorage.setItem('connexion_user', JSON.stringify(token))
	setTokenState(token)
	}

	const theme = extendTheme({
		fonts: {
			body: "Dosis, sans-serif",
			// ...
		  },
		
		styles: {
		  global: 
		  {
			body: {
			  bg: "gray.100", // Set your desired background color here
			},
		  },
		},
	  });
  
	return <>
	 <ChakraProvider theme={theme}>
	 
	<Routes>
	
    <Route path="/login" element={<Login setToken={setToken} />} />
    <Route path="/register" element={<Register setToken={setToken} />} />

	<Route path="*" element={
	<Authorized token={token}>
			<ProfileProvider>
    <NavBar/>
    <ApplicationViews/>
	</ProfileProvider>
</Authorized>}/>
</Routes>

</ChakraProvider>
  </>
}



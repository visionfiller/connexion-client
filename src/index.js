import React from 'react';
import  { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react'

 import './index.css';
import { Connexion } from './Connexion';



const container = document.getElementById("root")
const root = createRoot(container)
root.render(
   <ChakraProvider>
    <BrowserRouter>
        <Connexion/>
    </BrowserRouter>
    </ChakraProvider>
)

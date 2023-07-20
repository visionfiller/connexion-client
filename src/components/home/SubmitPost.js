import { Box, FormControl, FormLabel, Textarea, Image, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { UploadWidget } from "../cloudinary/UploadWidget";
import { addNewPost } from "../managers/PostManager";

export const SubmitForm = ({getPosts}) => {
    const [url, setURL] = useState("")
    const [error, updateError] = useState("");
    const [newPost, setNewPost] = useState({
        body: "",
        image: ""
    })

    useEffect(
        () => {
            if (url !== "") {
                HandleControlledInputChangeCustomer(url)
            }


        }, [url])
    function handleOnUpload(error, result, widget) {
        if (error) {
            updateError(error);
            widget.close({
                quiet: true
            });
            return;
        }
        setURL(result?.info?.secure_url)

    }
    const HandleControlledInputChangeCustomer = (url) => {
        const copy = { ...newPost }
        copy.image = url
        setNewPost(copy)
    }
    const HandleControlledInput = (event) => {
        const copy = { ...newPost }
       
        copy[event.target.name] = event.target.value
        
        setNewPost(copy)
    }
    const resetForm = () => {
        setURL("");
        setNewPost({
          body: "",
          image: "",
        });
        updateError("");
      };

    const HandleSubmit = (event) => {
        event.preventDefault()
        let data = {
            body: newPost.body,
            image: newPost.image
           
        }
       addNewPost(data).then(()=> getPosts())
       resetForm()
    }
    return <>
        <Box bg="white" mx="auto" w={{ base: "100%", md: "50%" }} p="8" rounded="lg" border="2px" borderColor="teal">


            <form onSubmit={HandleSubmit}>
    
                <FormControl mt={4}>
                    <FormLabel>What's on your mind?</FormLabel>
                    <Textarea
                        name="body"
                        onChange={HandleControlledInput}
                        type="text"
                    />
                </FormControl>
                
                <FormControl mt="4">


                    {url === "" ? ""
                        : <Image h="50%" w="full" src={url} />}

                    <UploadWidget onUpload={handleOnUpload} />

                </FormControl>
                <Box align="center">
                    <Button size="lg" align="center" mt={4} colorScheme="teal" type="submit">
                        Submit
                    </Button>
                </Box>
            </form>
        </Box>
    </>
}
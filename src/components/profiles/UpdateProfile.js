import { useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
// import { UploadWidget } from "../cloudinary/UploadWidget"
import { Flex, FormControl, IconButton, Checkbox, Input, Textarea, FormLabel, Select, useDisclosure, Box, Badge, Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, ButtonGroup } from '@chakra-ui/react'
import { getGenders, getOrientations } from "../managers/GenderManager"
import { updateMyProfile } from "../managers/UserProvider"
import { UploadWidget } from "../cloudinary/UploadWidget"


export const ProfileForm = ({ myProfile, getProfile, genders, orientations }) => {
    const navigate = useNavigate()
    const [url, setURL] = useState("")
    const [error, updateError] = useState("");
    const [profile, setProfile] = useState({
        full_name: "",
        bio: "",
        profile_picture: "",
        gender: 0,
        orientation: 0

    })


    useEffect(() => {
        if (myProfile) {
            setProfile(myProfile)

        }

    }, [myProfile])


    const HandleControlledInput = (event) => {
        const copy = { ...profile }
        // if (event.target.name === "gender") {
        //     copy[event.target.name] = genders.find((gender) => gender.id === parseInt(event.target.value))
        // }
        // else if (event.target.name === "orientation") {
        //     copy[event.target.name] = orientations.find((orientation) => orientation.id === parseInt(event.target.value))
        // }


        {
            copy[event.target.name] = event.target.value
        }
        setProfile(copy)
    }
    // const HandleControlledInputChecked = (event) => {
    //     const copy = { ...newProperty }

    //     copy[event.target.name] = event.target.checked
    //     setProfile(copy)
    // }
    const HandleSubmit = (event) => {
        event.preventDefault()
        let data = {
            full_name: profile.full_name,
            bio: profile.bio,
            profile_picture: profile.profile_picture,
            gender: parseInt(profile.gender),
            orientation: parseInt(profile.orientation)
        }
        updateMyProfile(data).then(() => getProfile())
    }

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
        const copy = { ...profile }
        copy.profile_picture= url
        setProfile(copy)
    }

    useEffect(
        () => {
            if (url !== "") {
                HandleControlledInputChangeCustomer(url)

            }


        }, [url])
    return <>

        <Box bg="white" mx="auto" w={{ base: "100%", md: "50%" }} p="8" rounded="lg" border="2px" borderColor="teal">


            <form onSubmit={HandleSubmit}>
                <FormControl mt={4}>
                    <FormLabel>Name</FormLabel>
                    <Input
                        value={profile.full_name}
                        name="full_name"
                        onChange={HandleControlledInput}
                        border="1px"
                        borderColor="gray.700"
                        type="text"
                    />
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Gender</FormLabel>
                    <Flex>
                        <Select
                            value={profile?.gender}
                            name="gender"
                            onChange={HandleControlledInput}
                            border="1px"
                            borderColor="gray.700"
                        >
                            <option>Select a Gender</option>
                            {genders.map((gender) => (
                                <option key={gender.id} value={gender.id}>
                                    {gender.label}
                                </option>
                            ))}

                        </Select>
                        {/* <IconButton icon={<AddIcon />} bg="transparent" onClick={onOpen} _hover={{ backgroundColor: "transparent" }}></IconButton> */}
                    </Flex>
                    {/* <AreaForm isOpen={isOpen} onClose={onClose} getAreas={getAreas} /> */}
                </FormControl>
                <FormControl mt={4}>
                    <FormLabel>Orientation</FormLabel>
                    <Flex>
                        <Select
                            value={profile?.orientation}
                            name="orientation"
                            onChange={HandleControlledInput}
                            border="1px"
                            borderColor="gray.700"
                        >
                            <option>Select an Orientation</option>
                            {orientations.map((orientation) => (
                                <option key={orientation.id} value={orientation.id}>
                                    {orientation.label}
                                </option>
                            ))}

                        </Select>
                    </Flex>
                </FormControl>




                <FormControl mt={4}>
                    <FormLabel>Bio</FormLabel>
                    <Input
                        value={profile.bio}
                        name="bio"
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
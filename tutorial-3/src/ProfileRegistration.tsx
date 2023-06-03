import React, { useState } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    VStack,
    Alert,
    AlertIcon,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';


const ProfileRegistration = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    const registerForm = (e: any) => {
        e.preventDefault();

        const lettersOnlyRegex = /^[a-zA-Z]+$/;

        if (!firstName.match(lettersOnlyRegex)) {
            setErrorMessage('First name should only contain letters');
            return;
        } else {
            setErrorMessage('');
        }

        if (!lettersOnlyRegex.test(lastName)) {
            setErrorMessage('Last name should only contain letters');
            return;
        } else {
            setErrorMessage('');
        }

        const validEmailFormatRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!validEmailFormatRegex.test(email)) {
            setErrorMessage('Last name should only contain letters');
            return;
        } else {
            setErrorMessage('');
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        const data = {
            firstName: firstName,
            lastName: lastName,
            email: email
        };

        navigate('/profile', { state: data });
    };

    return (
        <Box maxW="md" m="auto" p="4">
            <form onSubmit={registerForm}>
                <VStack spacing="4">
                    {errorMessage && (
                        <Alert status="error">
                            <AlertIcon />
                            {errorMessage}
                        </Alert>
                    )}
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Confirm Password</FormLabel>
                        <Input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </FormControl>
                    <Button type="submit" colorScheme="green">
                        Register
                    </Button>
                </VStack>
            </form>
        </Box>
    );
};

export default ProfileRegistration;
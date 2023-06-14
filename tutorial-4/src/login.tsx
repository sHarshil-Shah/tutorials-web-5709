import React, { useState } from 'react';
import { Box, Button, Input, Stack, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleClick = () => {
        fetch('https://express-t4.onrender.com/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            }),
        })
            .then(async response => {
                console.log(response);
          
                if (response.status === 200) {
                    navigate('/users')
                }else{
                    setErrorMessage((await response.json()).message);
                }

            });
    };

    return (

        <Box maxW="sm" mx="auto" mt={20} p={6} borderWidth="1px" rounded="lg" shadow="md">
            <Box textAlign="center" mb={4}>
                <h2>Login</h2>
            </Box>
            <Stack spacing={4}>
                <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <Input type="password" placeholder="Password" value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <Button onClick={handleClick} colorScheme="blue" size="lg" width="full">
                    Login
                </Button>
                {errorMessage && <Text color="red">{errorMessage}</Text>}
            </Stack>
        </Box>
    );
}
export default Login;

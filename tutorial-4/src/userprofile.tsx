import { Card, CardBody, CardHeader, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const UserProfile = () => {

    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Simulating an API call with a timeout
        const fetchData = async () => {
            try {
                const response = await fetch('https://express-t4.onrender.com/api/users/' + id);
                const data = await response.json();
                console.log(data);
                setUser(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);
    return (
        <Card align='center'>
            <CardHeader>
                <Heading size='md'> User Profile</Heading>
            </CardHeader>
            <CardBody>
                {user && (
                    <>
                        <img src={user["picture"]} alt={user["name"]} />
                        <div>_id: {user["_id"]}</div>
                        <div>  balance: {user["balance"]}</div>
                        <div> age: {user["age"]}</div>
                        <div> eyeColor: {user["eyeColor"]}</div>
                        <div> name: {user["name"]}</div>
                        <div> gender: {user["gender"]}</div>
                        <div> company: {user["company"]}</div>
                        <div> email: {user["email"]}</div>
                        <div> phone: {user["phone"]}</div>
                        <div> address: {user["address"]}</div>
                    </>
                )
                }
            </CardBody>
        </Card>
    );
}

export default UserProfile;
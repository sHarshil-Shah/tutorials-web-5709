import { useEffect, useState } from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Input,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

interface User {
    id: string;
    name: string;
    email: string;
    balance: number;
  }


const Users = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [filter, setFilter] = useState('');

    useEffect(() => {
        // Simulating an API call with a timeout
        const fetchData = async () => {
            try {
                const response = await fetch('https://express-t4.onrender.com/api/users');
                const data = await response.json();
                console.log(data);
                setData(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    function handleRowClick(user_id: String): void {
        console.log(user_id);
        navigate('/users/' + user_id);
    }


    const filteredData = data.filter((user: User) =>
        user.name.toLowerCase().includes(filter.toLowerCase())
    );

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };
    return (
        <><Input
            placeholder="Filter by First Name or Last Name"
            value={filter}
            onChange={handleFilterChange}/><div>
                <TableContainer>
                    <Table size='sm'>
                        <Thead>
                            <Tr>
                                <Th></Th>
                                <Th>Name</Th>
                                <Th>Email</Th>
                                <Th isNumeric>Balance</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {filteredData && filteredData.map((user) => (
                                <Tr key={user["_id"]} onClick={() => handleRowClick(user["_id"])}>
                                    <Td>
                                        <img src={user["picture"]} alt={user["name"]} />
                                    </Td>
                                    <Td>{user["name"]}</Td>
                                    <Td>{user["email"]}</Td>
                                    <Td>{user["balance"]}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </div></>
    );
};

export default Users;

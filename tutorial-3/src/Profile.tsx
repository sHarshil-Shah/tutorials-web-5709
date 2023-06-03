import { useLocation } from 'react-router-dom';

const Profile = () => {

    const location = useLocation();
    const state = location.state;
    return (
        <div>
            <h1>Profile Page</h1>
            <p>First Name: {state.firstName}</p>
            <p>Last Name: {state.lastName}</p>
            <p>Email: {state.email}</p>
        </div>
    );
};

export default Profile;

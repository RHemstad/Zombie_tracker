import {useState, useEffect} from "react";
import axios from '../../api/axios';
//for testing only
import useRefreshToken from "../../hooks/useRefreshToken";

const Users = () => {
    const [users, setUsers] = useState();
    const refresh = useRefreshToken();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axios.get('/users', {
                    signal: controller.signal  
            });
            console.log(response?.data);
            isMounted && setUsers(response?.data);
            } catch (error) {
                console.error(error);
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();}
    }, []);

  return (
    <article>
        <h2>Users</h2>
        {users?.length
        ? (
            <ul>
                {users.map((user, i) => 
                    <li key={user.id}>{user?.username}</li>
                )}
            </ul>

        ) : <p>No users</p>
        
        
        }
        <button onClick={() => refresh()}>Refresh</button>
    </article>
  )
}

export default Users
import { Link } from 'react-router-dom';
import Users from '../users/Users';

const Admin = () => {
  return (
    <section>
        <h2>Admin</h2>
        <Users />

        <Link to="/dashboard">Dashboard</Link>



    </section>
  )
}

export default Admin
import RequireAuth from './components/require_auth/RequireAuth';
import {Route, Routes} from 'react-router-dom'
import Home from './components/home/Home';
import Dashboard from './components/dashboard/Dashboard';
import Map from './components/map/Map';
import Register from './components/register/Register';
import Login from './components/login/Login';
import Missing from './components/missing/Missing';
import Layout from './components/layout/Layout';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Admin from './components/admin/Admin';
import Unauthorized from './components/unauthorized/Unauthorized';
import Users from './components/users/Users';
import TestPage from './components/TestPage';

//object lookup for auto complete
//not great for security but this is just a demo
const ROLES = {
  'User': 2001
}


const App = () => {
  return (
    <>

<Header />
<Routes>
<Route path="/" element={<Layout />}>
        {/* public */}
        {/* home is now the homepage */}
        <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/map" element={<Map />} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />

       <Route path="/unauthorized" element={<Unauthorized />} />
       <Route path="/testpage" element={<TestPage />} />
       <Route path="/dashboard" element={<Dashboard />} />

    {/* Protected Routes */}
    <Route element={<RequireAuth />}>
    {/* for demo - everyone is assigned 2001 role - aka user */}
    {/* <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>*/}
    {/* dashboard is our home for a signed in user */}

    {/* TODO: we don't have full roles yet */}
    {/* <Route path="admin" element={<Admin />} />*/}
    </Route>

       {/* 404 */}
        <Route path="*" element={<Missing/> } />

        </Route>
   </Routes>



    <Footer />
   </>
  )

}

export default App
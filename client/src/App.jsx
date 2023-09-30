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
       <Route path="/home" element={<Home />} />
       <Route path="/map" element={<Map />} />
       <Route path="/register" element={<Register />} />
       <Route path="/login" element={<Login />} />

    {/* these routes are protected */}
     {/* for demo - everyone is assigned 2001 role - aka user */}
    <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
       {/* these routes need to be protected */}
         {/* home is dashboard */}
       <Route path="/dashboard" element={<Dashboard />} />
      <Route path="admin" element={<Admin />} />
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
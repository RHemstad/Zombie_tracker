import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
{/* should this be main */}
        <div className="App">
            <Outlet />
        </div>



        </>
    )
}

export default Layout
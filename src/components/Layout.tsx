import { Outlet } from "react-router"
import NavBar from "./NavBar"

const Layout = () => {
    return (
        <main className="flex flex-col mx-6 gap-1 min-h-screen">
            <NavBar />
            <div className="mx-6 md:mx-36 lg:mx-48">
                <Outlet />
            </div>
        </main>
    )
}

export default Layout
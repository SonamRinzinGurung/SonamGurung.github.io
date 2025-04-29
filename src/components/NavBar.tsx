import { NavLink } from "react-router"

const NavBar = () => {
    return (
        <div className='flex gap-2 md:gap-8 ml-auto my-6 flex-wrap'>
            <NavLink to={"/"} end={true}
                className={({ isActive }) => `
                 ${isActive ? "text-teal-500" : ""}
                font-semibold
                 `}
            >Homepage</NavLink>
            <NavLink to={"about"}
                className={({ isActive }) => `
                 ${isActive ? "text-teal-500" : ""}
                font-semibold
                 `}
            >About</NavLink>
            <NavLink to={"projects"}
                className={({ isActive }) => `
                 ${isActive ? "text-teal-500" : ""}
                font-semibold`}
            >Projects</NavLink>
            <NavLink to={"blogs"}
                className={({ isActive }) => `
                 ${isActive ? "text-teal-500" : ""}
                font-semibold`}
            >Blogs</NavLink>
            <NavLink to={"contact"}
                className={({ isActive }) => `
                 ${isActive ? "text-teal-500" : ""}
               font-semibold `}
            >Contact</NavLink>

            <div className="font-semibold">CV</div>
        </div>
    )
}

export default NavBar
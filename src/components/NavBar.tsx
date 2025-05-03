import { NavLink } from "react-router";
import { IoMdDownload } from "react-icons/io";
import resume from "../assets/resume.pdf"

const NavBar = () => {
    return (
        <div className="flex gap-2 md:gap-8 ml-auto my-6">
            <NavLink
                to={"/"}
                end={true}
                className={({ isActive }) => `
                 ${isActive ? "text-teal-500" : ""}
                font-semibold
                 `}
            >
                Homepage
            </NavLink>
            <NavLink
                to={"about"}
                className={({ isActive }) => `
                 ${isActive ? "text-teal-500" : ""}
                font-semibold
                 `}
            >
                About
            </NavLink>
            <NavLink
                to={"projects"}
                className={({ isActive }) => `
                 ${isActive ? "text-teal-500" : ""}
                font-semibold`}
            >
                Projects
            </NavLink>
            <NavLink
                to={"blogs"}
                className={({ isActive }) => `
                 ${isActive ? "text-teal-500" : ""}
                font-semibold`}
            >
                Blogs
            </NavLink>

            <a href={resume} target="_blank" className="font-semibold px-4 py-1 rounded-md shadow-md bg-teal-500 text-white flex items-center gap-2 cursor-pointer">
                <IoMdDownload /> <span>CV</span>
            </a>
        </div>
    );
};

export default NavBar;

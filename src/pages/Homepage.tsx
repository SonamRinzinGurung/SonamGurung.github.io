import profileImg from "../assets/me.jpg"
import { FaGithub, FaLinkedin, FaResearchgate, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router";

const Homepage = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col">
                <img src={profileImg} alt="profile-image" className="w-32 rounded-full" />
                <h2>Sonam Gurung</h2>
                <p>Master's student at <a href="https://www.usd.edu/" className="text-teal-500 font-semibold" target="_blank">University of South Dakota</a></p>
                <div className="flex gap-6">
                    <Link to={"mailto:sonamrinzingurung@gmail.com"} target="_blank">
                        <FaEnvelope size="24" />
                    </Link>
                    <Link to={"https://github.com/SonamRinzinGurung/"} target="_blank">
                        <FaGithub size="24" />
                    </Link>
                    <Link to={"https://www.linkedin.com/in/sonam-gurung-59060b211/"} target="_blank">
                        <FaLinkedin size="24" />
                    </Link>
                    <Link to={"https://www.researchgate.net/profile/Sonam-Gurung-6?ev=hdr_xprf"} target="_blank">
                        <FaResearchgate size="24" />
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p>
                    Hello! I'm Sonam Gurung, a passionate Software Engineer
                    currently pursuing my Master's in Computer Science at the University
                    of South Dakota. I hold a First Class Honors Bachelor's degree from
                    the University of Wolverhampton.
                </p>
                <p>
                    My journey spans hands-on experience across both frontend and
                    backend development, having worked on diverse real-world projects.
                    During my professional engagements I've contributed to building
                    secure authentication systems, scalable applications, and robust
                    backend infrastructures using technologies like React, Node.js,
                    Django, TypeScript, Firebase, and PostgreSQL. I also have a strong
                    foundation in cloud services, SSO integration, microservices, and
                    automation tools like Selenium.
                </p>
                <p>
                    This portfolio serves as a showcase of my technical skills, professional experience, and personal projects. It is a space where I demonstrate my ability to design, build, and deliver software solutions that solve real-world problems.
                    Through this platform, I aim to connect with like-minded individuals, recruiters, and potential collaborators who value quality engineering, innovation, and a strong growth mindset.
                </p>
            </div>
        </div>
    );
};

export default Homepage;

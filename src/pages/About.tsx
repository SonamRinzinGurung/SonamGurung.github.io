import EducationCard from "../components/EducationCard";
import ExperienceCard from "../components/ExperienceCard";
import profileImg from "../assets/me.jpg"

const About = () => {
    return (
        <div className="flex flex-col gap-2">
            <h1>About Me</h1>

            <div className="flex flex-col gap-6">
                <div>
                    <img src={profileImg} alt="sonam" className="rounded-xl shadow-md w-52" />
                </div>

                <div>
                    <h3>Background</h3>
                    <p>
                        My name is Sonam Rinzin Gurung. I am from the himalayas of Nepal, a small village called Lomanthang in Mustang district. My family moved to Kathmandu when I was 4. I completed my Bachelors in Nepal from Herald College Kathmandu (affiliated with University of Wolverhampton, UK). I am currently living in the US while pursing a master's degree in CS. My mother tongue is Lowa language which is a dialect of Tibetan language.
                    </p>
                </div>
                <EducationCard
                    educations={[
                        {
                            institution: "University of South Dakota",
                            degree: "MS in Computer Science",
                            from: "2024",
                            to: "Present",
                        },
                        {
                            institution: "University of Wolverhampton",
                            degree: "BS in Computer Science with Honors",
                            from: "2021",
                            to: "2023",
                        },
                    ]}
                />
                <ExperienceCard experiences={[
                    {
                        company: 'Paksa',
                        position: 'Full-stack Software Developer',
                        from: 'May 2024',
                        to: 'July 2024',
                        companyLink: 'https://www.paksastudios.com/',
                    },
                    {
                        company: 'Mango Software Solutions',
                        position: 'Django Developer',
                        from: 'August 2023',
                        to: 'April 2024',
                        companyLink:
                            'https://www.linkedin.com/company/mango-software-solutions/?originalSubdomain=np',
                    },
                    {
                        company: 'Flaresight',
                        position: 'Django Intern',
                        from: 'June 2023',
                        to: 'July 2023',
                        companyLink: 'https://www.linkedin.com/company/flaresight/people/',
                    },
                ]} />
                <div>

                    <h3>Interests</h3>
                    <p>
                        I like playing basketball and working out in my free time. I love discovering music from the past - early 90s and 00s are my favorite era for music. I read e-books because its more convenient and cheaper and also eco-friendly. I like playing video games but only if its not too hard. I am a serial binge watcher and I only watch TV series which have already ended long ago.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;

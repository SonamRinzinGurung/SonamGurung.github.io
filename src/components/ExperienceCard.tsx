import React from 'react';

export interface SanitizedExperience {
    company?: string;
    position?: string;
    from: string;
    to: string;
    companyLink?: string;
}
const ListItem = ({
    time,
    position,
    company,
    companyLink,
}: {
    time: React.ReactNode;
    position?: React.ReactNode;
    company?: React.ReactNode;
    companyLink?: string;
}) => (
    <li className="mb-5 ml-4">
        <div
            className="absolute w-3 h-3 bg-gray-800 rounded-full border border-base-300 mt-1.5"
            style={{ left: '-6.5px' }}
        ></div>
        <div className="my-0.5 text-xs">{time}</div>
        <h3 className="font-semibold">{position}</h3>
        <div className="mb-4 font-normal">
            <a href={companyLink} target="_blank" rel="noreferrer" className='text-teal-500 font-semibold'>
                {company}
            </a>
        </div>
    </li>
);

const ExperienceCard = ({
    experiences,
}: {
    experiences: SanitizedExperience[];
}) => {

    return (
        <div className="card">
            <div className="card-body">
                <div className="">
                    <h3 className="card-title">
                        Experience
                    </h3>
                </div>
                <div className="text-opacity-60">
                    <ol className="relative border-l my-2 mx-4">


                        {experiences.map((experience, index) => (
                            <ListItem
                                key={index}
                                time={`${experience.from} - ${experience.to}`}
                                position={experience.position}
                                company={experience.company}
                                companyLink={
                                    experience.companyLink
                                        ? experience.companyLink
                                        : undefined
                                }
                            />
                        ))}


                    </ol>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;

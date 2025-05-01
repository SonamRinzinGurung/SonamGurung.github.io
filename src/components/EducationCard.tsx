import React from 'react';

export interface SanitizedEducation {
    institution?: string;
    degree?: string;
    from: string;
    to: string;
}
const ListItem = ({
    time,
    degree,
    institution,
}: {
    time: React.ReactNode;
    degree?: React.ReactNode;
    institution?: React.ReactNode;
}) => (
    <li className="mb-5 ml-4">
        <div
            className="absolute w-3 h-3 bg-gray-700 rounded-full border  mt-1.5"
            style={{ left: '-6.5px' }}
        ></div>
        <div className="my-0.5 text-xs">{time}</div>
        <h3 className="font-semibold">{degree}</h3>
        <div className="mb-4 font-normal">{institution}</div>
    </li>
);

const EducationCard = ({
    educations,
}: {
    educations: SanitizedEducation[];
}) => {
    return (
        <div className="card">
            <div className="card-body">
                <div className="">
                    <h3 className="card-title">

                        Education
                    </h3>
                </div>
                <div className="text-opacity-60">
                    <ol className="relative border-l my-2 mx-4">
                        {educations.map((item, index) => (
                            <ListItem
                                key={index}
                                time={`${item.from} - ${item.to}`}
                                degree={item.degree}
                                institution={item.institution}
                            />
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;

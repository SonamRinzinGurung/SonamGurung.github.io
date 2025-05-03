import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { MdInsertLink } from 'react-icons/md';
import { getLanguageColor } from '../utils';

export interface GithubProject {
    name: string;
    html_url: string;
    description: string;
    stargazers_count: string;
    forks_count: string;
    language: string;
}


const GithubProjectCard = ({
    header,
    githubProjects,
    username,
}: {
    header: string;
    githubProjects: GithubProject[];
    username: string;
}) => {
    return (
        <div className="col-span-1 lg:col-span-2">
            <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                    <div className="card">
                        <div className="card-body">
                            <div className="flex items-center justify-between mb-6">
                                <h1 className="card-title">
                                    {header}
                                </h1>
                                <a
                                    href={`https://github.com/${username}?tab=repositories`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-base-content opacity-50 hover:underline"
                                >
                                    See All
                                </a>
                            </div>
                            <div className="col-span-2">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {githubProjects.map((item, index) => (
                                        <a
                                            className="card shadow-md rounded-md cursor-pointer hover:shadow-lg transition-shadow ease-in-out"
                                            href={item.html_url}
                                            key={index}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                window?.open(item.html_url, '_blank');
                                            }}
                                        >
                                            <div className="flex justify-between flex-col p-8 h-full w-full">
                                                <div>
                                                    <div className="flex items-center truncate">
                                                        <div className="card-title text-lg tracking-wide flex gap-1">
                                                            <MdInsertLink className="my-auto opacity-60" />
                                                            <h6>{item.name}</h6>
                                                        </div>
                                                    </div>
                                                    <p className="mb-5 mt-2 text-shadow-2xs opacity-80">
                                                        {item.description}
                                                    </p>
                                                </div>
                                                <div className="flex justify-between text-sm truncate">
                                                    <div className="flex flex-grow">
                                                        <span className="mr-3 flex items-center">
                                                            <AiOutlineStar className="mr-0.5" />
                                                            <span>{item.stargazers_count}</span>
                                                        </span>
                                                        <span className="flex items-center">
                                                            <AiOutlineFork className="mr-0.5" />
                                                            <span>{item.forks_count}</span>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="flex items-center">
                                                            <div
                                                                className="w-3 h-3 rounded-full mr-1 opacity-60"
                                                                style={{ backgroundColor: getLanguageColor(item.language) }}
                                                            />
                                                            <span>{item.language}</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GithubProjectCard;

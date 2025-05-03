import { useState, useCallback, useEffect } from "react";
import axios from "axios";
import GithubProjectCard from "../components/GitHubProjectCard";
export interface GithubProject {
    name: string;
    html_url: string;
    description: string;
    stargazers_count: string;
    forks_count: string;
    language: string;
}


const Projects = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [githubProjects, setGithubProjects] = useState<GithubProject[]>([]);

    const gitHubProject = [
        'SonamRinzinGurung/Real-Estate-Rental-and-Tenant-Management-System',
        'SonamRinzinGurung/Workout-Planner',
        'SonamRinzinGurung/vocab-builder',
        'SonamRinzinGurung/Ye-Said-It',
        'SonamRinzinGurung/Gym-Membership-Manager',
        'SonamRinzinGurung/Jobs-Manager-Application',
        'SonamRinzinGurung/AI-ML-Model-Notebooks',
        'SonamRinzinGurung/Realtime-Chat-Application-MERN',
    ]

    const getGithubProjects = useCallback(
        async () => {
            try {
                setLoading(true)
                const repos = gitHubProject.map((project) => `+repo:${project}`).join('');

                const url = `https://api.github.com/search/repositories?q=${repos}+fork:true&type=Repositories`;

                const repoResponse = await axios.get(url, {
                    headers: { 'Content-Type': 'application/vnd.github.v3+json' },
                });
                const repoData = repoResponse.data;
                setGithubProjects(repoData.items)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        },
        [],
    );

    useEffect(() => {
        getGithubProjects()
    }, [getGithubProjects])

    if (loading) return null

    return (
        <GithubProjectCard githubProjects={githubProjects} username="SonamRinzinGurung" header="GitHub Projects" />
    )
}

export default Projects
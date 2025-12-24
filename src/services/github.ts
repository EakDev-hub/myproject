import type { GitHubUser, GitHubRepo } from '../types/github';

const BASE_URL = 'https://api.github.com/users';

export const fetchGitHubProfile = async (username: string): Promise<GitHubUser> => {
    const response = await fetch(`${BASE_URL}/${username}`);
    if (!response.ok) {
        throw new Error('User not found');
    }
    return response.json();
};

export const fetchGitHubRepos = async (username: string): Promise<GitHubRepo[]> => {
    const response = await fetch(`${BASE_URL}/${username}/repos?sort=updated&per_page=12`);
    if (!response.ok) {
        throw new Error('Repos not found');
    }
    return response.json();
};

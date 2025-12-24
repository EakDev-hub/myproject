import React from 'react';
import type { GitHubRepo } from '../types/github';

interface RepoGridProps {
    repos: GitHubRepo[];
}

const RepoGrid: React.FC<RepoGridProps> = ({ repos }) => {
    return (
        <div>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', borderLeft: '4px solid var(--primary-color)', paddingLeft: '1rem' }}>Latest Repositories</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {repos.map(repo => (
                    <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" className="glass-panel" style={{ padding: '1.5rem', transition: 'transform 0.2s', display: 'block' }}>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--primary-color)' }}>{repo.name}</h4>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem', minHeight: '3em' }}>
                            {repo.description ? (repo.description.length > 80 ? repo.description.substring(0, 80) + '...' : repo.description) : 'No description available.'}
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>
                            <span>{repo.language || 'Code'}</span>
                            <span>★ {repo.stargazers_count}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default RepoGrid;

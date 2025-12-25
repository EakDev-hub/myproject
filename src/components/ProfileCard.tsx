import React from 'react';
import type { GitHubUser } from '../types/github';

interface ProfileCardProps {
    user: GitHubUser;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
    return (
        <div className="glass-panel" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3rem' }}>
            <img
                src={user.avatar_url}
                alt={user.name}
                style={{ width: '240px', height: '240px', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.2)', marginBottom: '1rem' }}
            />
            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{user.name}</h2>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontWeight: 500 }}>
                @{user.login}
            </a>
            {user.bio && <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '1.5rem' }}>{user.bio}</p>}

            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', width: '100%' }}>
                <div>
                    <strong style={{ display: 'block', fontSize: '1.5rem' }}>{user.public_repos}</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Repositories</span>
                </div>
                <div>
                    <strong style={{ display: 'block', fontSize: '1.5rem' }}>{user.followers}</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Followers</span>
                </div>
                <div>
                    <strong style={{ display: 'block', fontSize: '1.5rem' }}>{user.following}</strong>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Following</span>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;

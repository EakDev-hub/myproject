import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import ProfileCard from './components/ProfileCard';
import RepoGrid from './components/RepoGrid';
import { fetchGitHubProfile, fetchGitHubRepos } from './services/github';
import type { GitHubUser, GitHubRepo } from './types/github';

// CHANGE THIS USERNAME TO YOURS
const GITHUB_USERNAME = 'EakDev-hub';

function App() {
  const [user, setUser] = useState<GitHubUser | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [userData, reposData] = await Promise.all([
          fetchGitHubProfile(GITHUB_USERNAME),
          fetchGitHubRepos(GITHUB_USERNAME)
        ]);
        setUser(userData);
        setRepos(reposData);
      } catch (err) {
        setError('Failed to load GitHub data. Please check the username.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <div className="glass-panel" style={{ padding: '2rem' }}>Loading Portfolio...</div>
        </div>
      </Layout>
    );
  }

  if (error || !user) {
    return (
      <Layout>
        <div style={{ textAlign: 'center', color: '#ef4444' }}>
          <h2>Error</h2>
          <p>{error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <ProfileCard user={user} />
      <RepoGrid repos={repos} />
    </Layout>
  );
}

export default App;

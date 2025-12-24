import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="container">
            <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 700 }}>
                    <span className="text-gradient">Dev</span>Portfolio
                </h1>
            </header>
            <main className="animate-fade-in">
                {children}
            </main>
            <footer style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <p>&copy; {new Date().getFullYear()} Built with React & GitHub API</p>
            </footer>
        </div>
    );
};

export default Layout;

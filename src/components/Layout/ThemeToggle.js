const ThemeToggle = () => {
    const { isDark, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'var(--accent-primary)',
                border: 'none',
                color: 'white',
                cursor: 'pointer',
                boxShadow: '0 4px 16px var(--shadow-medium)',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1001
            }}
            onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.1)';
                e.target.style.background = 'var(--accent-secondary)';
                e.target.style.boxShadow = '0 6px 20px var(--shadow-heavy)';
            }}
            onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.background = 'var(--accent-primary)';
                e.target.style.boxShadow = '0 4px 16px var(--shadow-medium)';
            }}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
            <i 
                data-feather={isDark ? 'sun' : 'moon'} 
                style={{ width: '24px', height: '24px' }}
            ></i>
        </button>
    );
};

window.ThemeToggle = ThemeToggle;

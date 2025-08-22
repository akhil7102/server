const Header = ({ title, subtitle, sidebarCollapsed }) => {
    return (
        <header style={{
            background: 'var(--card-bg)',
            borderBottom: '1px solid var(--border-color)',
            padding: '1.5rem 2rem',
            paddingLeft: sidebarCollapsed ? '1rem' : '2rem',
            boxShadow: '0 1px 3px var(--shadow-light)',
            transition: 'padding-left 0.3s ease'
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <div>
                    <h1 style={{
                        fontSize: '1.875rem',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        marginBottom: '0.25rem'
                    }}>
                        {title}
                    </h1>
                    {subtitle && (
                        <p style={{
                            fontSize: '1rem',
                            color: 'var(--text-secondary)'
                        }}>
                            {subtitle}
                        </p>
                    )}
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem'
                }}>
                    <div style={{
                        padding: '0.5rem 1rem',
                        background: 'var(--secondary-bg)',
                        borderRadius: '0.5rem',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                    }}>
                        <i data-feather="users" style={{ width: '16px', height: '16px' }}></i>
                        <span>Build with Ease</span>
                    </div>
                </div>
            </div>
        </header>
    );
};

window.Header = Header;

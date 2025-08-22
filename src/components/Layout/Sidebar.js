const { useState, useEffect } = React;

const Sidebar = ({ currentPage, onPageChange }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (mobile) {
                setIsCollapsed(true);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const menuItems = [
        { id: 'dashboard', label: 'Home', icon: 'home' },
        { id: 'guides', label: 'Guides', icon: 'book-open' },
        { id: 'video-guides', label: 'Video Guides', icon: 'play-circle' },
        { id: 'stone-forge', label: 'Stone Forge', icon: 'zap' },
        { id: 'iron-forge', label: 'Iron Forge', icon: 'cpu' },
        { id: 'diamond-forge', label: 'Diamond Forge', icon: 'star' },
        { id: 'faq', label: 'FAQ', icon: 'help-circle' },
        { id: 'contact', label: 'Contact', icon: 'mail' }
    ];

    return (
        <div 
            className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}
            style={{
                width: isCollapsed ? '60px' : '250px',
                height: '100vh',
                background: 'var(--secondary-bg)',
                borderRight: '1px solid var(--border-color)',
                transition: 'all 0.3s ease',
                position: 'fixed',
                left: 0,
                top: 0,
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            {/* Header */}
            <div style={{
                padding: '1rem',
                borderBottom: '1px solid var(--border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {!isCollapsed && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <div 
                            dangerouslySetInnerHTML={{ 
                                __html: `<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                    <defs>
                                        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" style="stop-color:#8b5cf6;stop-opacity:1" />
                                            <stop offset="100%" style="stop-color:#7c3aed;stop-opacity:1" />
                                        </linearGradient>
                                    </defs>
                                    <rect width="32" height="32" rx="6" fill="url(#logoGrad)" filter="url(#glow)"/>
                                    <rect x="3" y="3" width="26" height="18" rx="2" fill="white" opacity="0.15"/>
                                    <circle cx="7" r="1.2" cy="7" fill="white"/>
                                    <circle cx="7" r="1.2" cy="11" fill="white"/>
                                    <circle cx="7" r="1.2" cy="15" fill="white"/>
                                    <rect x="11" y="6" width="14" height="2" rx="1" fill="white"/>
                                    <rect x="11" y="10" width="11" height="2" rx="1" fill="white"/>
                                    <rect x="11" y="14" width="13" height="2" rx="1" fill="white"/>
                                </svg>` 
                            }}
                        />
                        <span style={{ fontWeight: '600', color: 'var(--text-primary)' }}>
                            ServerSmith
                        </span>
                    </div>
                )}
                <button
                    onClick={() => {
                        const newCollapsed = !isCollapsed;
                        setIsCollapsed(newCollapsed);
                        // Dispatch event to notify App component
                        window.dispatchEvent(new CustomEvent('sidebarToggle', { 
                            detail: { collapsed: newCollapsed } 
                        }));
                    }}
                    style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        padding: '0.25rem',
                        borderRadius: '4px',
                        transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                        e.target.style.background = 'var(--hover-bg)';
                        e.target.style.color = 'var(--accent-primary)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.background = 'none';
                        e.target.style.color = 'var(--text-secondary)';
                    }}
                >
                    <i data-feather={isCollapsed ? 'chevron-right' : 'chevron-left'} style={{ width: '20px', height: '20px' }}></i>
                </button>
            </div>

            {/* Navigation */}
            <nav style={{ flex: 1, padding: '1rem 0' }}>
                {menuItems.map(item => (
                    <button
                        key={item.id}
                        onClick={() => onPageChange(item.id)}
                        style={{
                            width: '100%',
                            padding: isCollapsed ? '0.75rem' : '0.75rem 1rem',
                            margin: '0.25rem 0',
                            background: currentPage === item.id ? 'var(--accent-primary)' : 'none',
                            color: currentPage === item.id ? 'white' : 'var(--text-secondary)',
                            border: 'none',
                            borderRadius: '0.5rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            justifyContent: isCollapsed ? 'center' : 'flex-start',
                            transition: 'all 0.2s ease',
                            fontSize: '0.875rem',
                            fontWeight: '500'
                        }}
                        onMouseEnter={(e) => {
                            if (currentPage !== item.id) {
                                e.target.style.background = 'var(--hover-bg)';
                                e.target.style.color = 'var(--accent-primary)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (currentPage !== item.id) {
                                e.target.style.background = 'none';
                                e.target.style.color = 'var(--text-secondary)';
                            }
                        }}
                    >
                        <i data-feather={item.icon} style={{ width: '18px', height: '18px', minWidth: '18px' }}></i>
                        {!isCollapsed && <span>{item.label}</span>}
                    </button>
                ))}
            </nav>

            {/* Footer */}
            <div style={{
                padding: '1rem',
                borderTop: '1px solid var(--border-color)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textAlign: 'center'
            }}>
                {!isCollapsed && (
                    <>
                        <div>ServerSmith v1.0</div>
                        <div style={{ marginTop: '0.25rem' }}>© 2025</div>
                    </>
                )}
            </div>
        </div>
    );
};

// Initialize Feather icons after component mount
React.useEffect = React.useEffect || (() => {});
React.useEffect(() => {
    if (window.feather) {
        window.feather.replace();
    }
}, []);

window.Sidebar = Sidebar;

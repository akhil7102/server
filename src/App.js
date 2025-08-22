const { useState, useEffect } = React;

const App = () => {
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

    // Listen for sidebar state changes
    useEffect(() => {
        const handleSidebarToggle = (event) => {
            setSidebarCollapsed(event.detail.collapsed);
        };
        
        window.addEventListener('sidebarToggle', handleSidebarToggle);
        return () => window.removeEventListener('sidebarToggle', handleSidebarToggle);
    }, []);

    // Handle window resize for responsive design
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSidebarCollapsed(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Check initial size

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Initialize Feather icons when component mounts
    useEffect(() => {
        const initFeather = () => {
            if (window.feather) {
                window.feather.replace();
            }
        };

        // Initial call
        initFeather();

        // Set up an interval to ensure icons are replaced as needed
        const interval = setInterval(initFeather, 100);

        // Clean up after 2 seconds
        setTimeout(() => clearInterval(interval), 2000);

        return () => clearInterval(interval);
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const getPageTitle = () => {
        switch (currentPage) {
            case 'dashboard':
                return { title: 'Dashboard', subtitle: 'Welcome to ServerSmith' };
            case 'guides':
                return { title: 'Guides', subtitle: 'Step-by-step tutorials' };
            case 'video-guides':
                return { title: 'Video Guides', subtitle: 'Advanced visual tutorials' };
            case 'stone-forge':
                return { title: 'Stone Forge', subtitle: 'Basic server configurations' };
            case 'iron-forge':
                return { title: 'Iron Forge', subtitle: 'Intermediate server setups' };
            case 'diamond-forge':
                return { title: 'Diamond Forge', subtitle: 'Advanced server networks' };
            case 'faq':
                return { title: 'FAQ', subtitle: 'Frequently asked questions' };
            case 'contact':
                return { title: 'Contact', subtitle: 'Get help and support' };
            default:
                return { title: 'ServerSmith', subtitle: 'Professional Minecraft Server Solutions' };
        }
    };

    const renderCurrentPage = () => {
        switch (currentPage) {
            case 'dashboard':
                return <Dashboard onNavigate={handlePageChange} />;
            case 'guides':
                return <Guides />;
            case 'video-guides':
                return <VideoGuides />;
            case 'stone-forge':
                return <Guides />;
            case 'iron-forge':
                return <Guides />;
            case 'diamond-forge':
                return <VideoGuides />;
            case 'faq':
                return <FAQ />;
            case 'contact':
                return <Contact />;
            default:
                return <Dashboard onNavigate={handlePageChange} />;
        }
    };

    const pageTitle = getPageTitle();

    return (
        <ThemeProvider>
            <div style={{
                display: 'flex',
                height: '100vh',
                background: 'var(--primary-bg)',
                color: 'var(--text-primary)',
                fontFamily: 'Inter, sans-serif'
            }}>
                {/* Sidebar */}
                <Sidebar 
                    currentPage={currentPage} 
                    onPageChange={handlePageChange}
                />

                {/* Main Content */}
                <div 
                    className="main-content"
                    style={{
                        flex: 1,
                        marginLeft: sidebarCollapsed ? '60px' : '250px',
                        transition: 'margin-left 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '100vh',
                        overflow: 'hidden'
                    }}
                >
                    {/* Header */}
                    <Header 
                        title={pageTitle.title}
                        subtitle={pageTitle.subtitle}
                        sidebarCollapsed={sidebarCollapsed}
                    />

                    {/* Page Content */}
                    <main style={{
                        flex: 1,
                        overflow: 'auto',
                        background: 'var(--primary-bg)'
                    }}>
                        {renderCurrentPage()}
                    </main>
                </div>


                {/* Global Styles */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                        /* Import global styles */
                        @import url("src/styles/globals.css");
                        
                        /* Responsive adjustments */
                        @media (max-width: 768px) {
                            .sidebar {
                                width: 60px !important;
                            }
                            
                            .main-content {
                                margin-left: 60px !important;
                            }
                            
                            .card {
                                padding: 1rem !important;
                            }
                            
                            h1 {
                                font-size: 2rem !important;
                            }
                            
                            .grid-cols-2,
                            .grid-cols-3,
                            .grid-cols-4 {
                                grid-template-columns: 1fr !important;
                            }
                        }
                        
                        /* Smooth transitions for theme changes */
                        * {
                            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
                        }
                        
                        /* Custom scrollbar for webkit browsers */
                        ::-webkit-scrollbar {
                            width: 8px;
                        }
                        
                        ::-webkit-scrollbar-track {
                            background: var(--secondary-bg);
                            border-radius: 4px;
                        }
                        
                        ::-webkit-scrollbar-thumb {
                            background: var(--border-color);
                            border-radius: 4px;
                        }
                        
                        ::-webkit-scrollbar-thumb:hover {
                            background: var(--text-muted);
                        }
                    `
                }} />
            </div>
        </ThemeProvider>
    );
};

window.App = App;

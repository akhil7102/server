const { useState } = React;

const Guides = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedGuide, setSelectedGuide] = useState(null);

    const categories = [
        { id: 'all', label: 'All Guides', icon: 'grid' },
        { id: 'basics', label: 'Basics', icon: 'play-circle' },
        { id: 'plugins', label: 'Plugins', icon: 'package' },
        { id: 'mods', label: 'Mods', icon: 'settings' },
        { id: 'advanced', label: 'Advanced', icon: 'cpu' }
    ];

    // Flatten all guides
    const allGuides = Object.keys(guidesData).reduce((acc, category) => {
        return [...acc, ...guidesData[category].map(guide => ({ ...guide, category }))];
    }, []);

    // Filter guides based on category and search
    const filteredGuides = allGuides.filter(guide => {
        const matchesCategory = selectedCategory === 'all' || guide.category === selectedCategory;
        const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             guide.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    React.useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, [selectedGuide]);

    if (selectedGuide) {
        return (
            <div className="fade-in" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                {/* Back Button */}
                <button
                    onClick={() => setSelectedGuide(null)}
                    className="btn btn-secondary"
                    style={{ marginBottom: '2rem' }}
                >
                    <i data-feather="arrow-left" style={{ width: '16px', height: '16px' }}></i>
                    Back to Guides
                </button>

                {/* Guide Content */}
                <article style={{
                    background: 'var(--card-bg)',
                    borderRadius: '12px',
                    padding: '2rem',
                    border: '1px solid var(--border-color)'
                }}>
                    {/* Header */}
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                            <span className={`badge ${
                                selectedGuide.difficulty === 'Beginner' ? 'badge-success' : 
                                selectedGuide.difficulty === 'Intermediate' ? 'badge-warning' : 
                                'badge-primary'
                            }`}>
                                {selectedGuide.difficulty}
                            </span>
                            <span className="badge badge-secondary">
                                <i data-feather="clock" style={{ width: '12px', height: '12px', marginRight: '0.25rem' }}></i>
                                {selectedGuide.readTime}
                            </span>
                        </div>
                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            marginBottom: '0.5rem',
                            lineHeight: '1.2'
                        }}>
                            {selectedGuide.title}
                        </h1>
                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.6'
                        }}>
                            {selectedGuide.description}
                        </p>
                    </div>

                    {/* Guide Image */}
                    <div style={{
                        height: '300px',
                        backgroundImage: `url(${selectedGuide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: '8px',
                        marginBottom: '2rem'
                    }} />

                    {/* Content */}
                    <div 
                        style={{
                            color: 'var(--text-primary)',
                            lineHeight: '1.7',
                            fontSize: '1rem'
                        }}
                        dangerouslySetInnerHTML={{
                            __html: selectedGuide.content
                                .replace(/^# (.*$)/gm, '<h1 style="font-size: 2rem; font-weight: 700; margin: 2rem 0 1rem; color: var(--text-primary);">$1</h1>')
                                .replace(/^## (.*$)/gm, '<h2 style="font-size: 1.5rem; font-weight: 600; margin: 1.5rem 0 0.75rem; color: var(--text-primary);">$1</h2>')
                                .replace(/^### (.*$)/gm, '<h3 style="font-size: 1.25rem; font-weight: 600; margin: 1rem 0 0.5rem; color: var(--text-primary);">$1</h3>')
                                .replace(/^\d+\. (.*$)/gm, '<li style="margin: 0.5rem 0;">$1</li>')
                                .replace(/^- (.*$)/gm, '<li style="margin: 0.25rem 0;">$1</li>')
                                .replace(/```([^`]+)```/g, '<pre style="background: var(--secondary-bg); padding: 1rem; border-radius: 6px; margin: 1rem 0; overflow-x: auto; border: 1px solid var(--border-color);"><code>$1</code></pre>')
                                .replace(/`([^`]+)`/g, '<code style="background: var(--secondary-bg); padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.875rem; border: 1px solid var(--border-color);">$1</code>')
                                .replace(/\n\n/g, '</p><p style="margin: 1rem 0;">')
                                .replace(/^\n/, '<p style="margin: 1rem 0;">')
                                .replace(/\n$/, '</p>')
                        }}
                    />
                </article>
            </div>
        );
    }

    return (
        <div className="fade-in" style={{ padding: '2rem' }}>
            {/* Header */}
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                }}>
                    Server Setup Guides
                </h1>
                <p style={{
                    fontSize: '1.125rem',
                    color: 'var(--text-secondary)'
                }}>
                    Step-by-step tutorials to help you build and configure your Minecraft server
                </p>
            </div>

            {/* Search Bar */}
            <div style={{ marginBottom: '2rem' }}>
                <div style={{ position: 'relative', maxWidth: '400px' }}>
                    <input
                        type="text"
                        placeholder="Search guides..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input"
                        style={{
                            paddingLeft: '2.5rem'
                        }}
                    />
                    <i 
                        data-feather="search" 
                        style={{
                            position: 'absolute',
                            left: '0.75rem',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '16px',
                            height: '16px',
                            color: 'var(--text-muted)'
                        }}
                    ></i>
                </div>
            </div>

            {/* Category Tabs */}
            <div style={{
                display: 'flex',
                gap: '0.5rem',
                marginBottom: '2rem',
                flexWrap: 'wrap'
            }}>
                {categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        style={{
                            padding: '0.75rem 1.5rem',
                            border: 'none',
                            borderRadius: '2rem',
                            background: selectedCategory === category.id ? 'var(--accent-primary)' : 'var(--secondary-bg)',
                            color: selectedCategory === category.id ? 'white' : 'var(--text-secondary)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            fontSize: '0.875rem',
                            fontWeight: '500'
                        }}
                        onMouseEnter={(e) => {
                            if (selectedCategory !== category.id) {
                                e.target.style.background = 'var(--hover-bg)';
                                e.target.style.color = 'var(--accent-primary)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (selectedCategory !== category.id) {
                                e.target.style.background = 'var(--secondary-bg)';
                                e.target.style.color = 'var(--text-secondary)';
                            }
                        }}
                    >
                        <i data-feather={category.icon} style={{ width: '16px', height: '16px' }}></i>
                        {category.label}
                    </button>
                ))}
            </div>

            {/* Guides Grid */}
            {filteredGuides.length > 0 ? (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '2rem'
                }}>
                    {filteredGuides.map((guide, index) => (
                        <div 
                            key={guide.id}
                            style={{
                                animationDelay: `${index * 0.1}s`
                            }}
                            className="slide-in-left"
                        >
                            <GuideCard guide={guide} onClick={setSelectedGuide} />
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{
                    textAlign: 'center',
                    padding: '4rem 2rem',
                    color: 'var(--text-muted)'
                }}>
                    <i data-feather="search" style={{ width: '48px', height: '48px', marginBottom: '1rem' }}></i>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                        No guides found
                    </h3>
                    <p>Try adjusting your search terms or category filter.</p>
                </div>
            )}
        </div>
    );
};

window.Guides = Guides;

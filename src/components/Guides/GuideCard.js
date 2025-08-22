const GuideCard = ({ guide, onClick }) => {
    return (
        <div 
            className="card"
            style={{
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                height: '360px',
                display: 'flex',
                flexDirection: 'column'
            }}
            onClick={() => onClick(guide)}
        >
            {/* Image Section */}
            <div style={{
                height: '180px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${guide.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.3s ease'
                }} />
                
                {/* Difficulty Badge */}
                <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    zIndex: 2
                }}>
                    <span className={`badge ${
                        guide.difficulty === 'Beginner' ? 'badge-success' : 
                        guide.difficulty === 'Intermediate' ? 'badge-warning' : 
                        guide.difficulty === 'Advanced' ? 'badge-primary' :
                        'badge-expert'
                    }`}>
                        {guide.difficulty}
                    </span>
                </div>

                {/* Gradient Overlay */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '50%',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.4))'
                }} />
            </div>

            {/* Content Section */}
            <div style={{
                padding: '1.5rem',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: 'var(--card-bg)'
            }}>
                <div>
                    <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.75rem',
                        lineHeight: '1.3'
                    }}>
                        {guide.title}
                    </h3>
                    <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.5',
                        marginBottom: '1rem'
                    }}>
                        {guide.description}
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--text-muted)',
                        fontSize: '0.75rem'
                    }}>
                        <i data-feather="clock" style={{ width: '14px', height: '14px' }}></i>
                        <span>{guide.readTime}</span>
                    </div>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        color: 'var(--accent-primary)',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                    }}>
                        <span>Read Guide</span>
                        <i data-feather="arrow-right" style={{ width: '16px', height: '16px' }}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

window.GuideCard = GuideCard;

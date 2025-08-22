const FeatureCard = ({ icon, title, description, difficulty, onClick, image }) => {
    return (
        <div 
            className="card"
            style={{
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
                height: '320px',
                display: 'flex',
                flexDirection: 'column'
            }}
            onClick={onClick}
        >
            {/* Header Section with Image/Icon */}
            <div style={{
                position: 'relative',
                height: '140px',
                overflow: 'hidden'
            }}>
                {/* Background Image */}
                {image && (
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.6,
                        transition: 'all 0.3s ease'
                    }} />
                )}
                
                {/* Gradient Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))`,
                    opacity: 0.85
                }} />

                {/* Icon */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2
                }}>
                    <div style={{
                        width: '56px',
                        height: '56px',
                        background: 'white',
                        borderRadius: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.3)'
                    }}>
                        <i 
                            data-feather={icon} 
                            style={{ 
                                width: '28px', 
                                height: '28px', 
                                color: 'var(--accent-primary)' 
                            }}
                        ></i>
                    </div>
                </div>
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
                        {title}
                    </h3>
                    <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.5',
                        marginBottom: '1rem'
                    }}>
                        {description}
                    </p>
                </div>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <span className={`badge ${
                        difficulty === 'Beginner' ? 'badge-success' : 
                        difficulty === 'Intermediate' ? 'badge-warning' : 
                        difficulty === 'Advanced' ? 'badge-primary' :
                        'badge-expert'
                    }`}>
                        {difficulty}
                    </span>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        color: 'var(--accent-primary)',
                        fontSize: '0.875rem',
                        fontWeight: '500'
                    }}>
                        <span>Learn More</span>
                        <i data-feather="arrow-right" style={{ width: '16px', height: '16px' }}></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

window.FeatureCard = FeatureCard;

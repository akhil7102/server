const Dashboard = ({ onNavigate }) => {
    const features = [
        {
            icon: 'sword',
            title: 'Practice PvP / Duels Server Setup',
            description: 'Create an advanced practice server for competitive PvP training and dueling.',
            difficulty: 'Advanced',
            image: 'https://pixabay.com/get/g369fe82e9ff3b9fe24d4d9a8ed6a7ee7d868544fe77cdc77cbee3f0adb147d3baf5b26484467158213df74ee54275236cc9e73684578e387472b0c88bea9fdf3_1280.jpg',
            action: () => onNavigate('guides')
        },
        {
            icon: 'heart',
            title: 'Lifesteal Server Setup Guide',
            description: 'Set up an exciting lifesteal server where players steal hearts from each other.',
            difficulty: 'Intermediate',
            image: 'https://pixabay.com/get/g58a12a56adba356873b2ea1ecaf9868244c1bbae4c1c2226422454defefff600e88f785659a010689f45fb92f8cee07ac966d68a00d5d07657e3a2079a5bd480_1280.jpg',
            action: () => onNavigate('guides')
        },
        {
            icon: 'zap',
            title: 'FFA Server Setup Guide',
            description: 'Build a fast-paced free-for-all combat server with custom arenas.',
            difficulty: 'Intermediate',
            image: 'https://pixabay.com/get/g9829281d0a6978047c8f77e106dfc424ab101ec77de386e07d020399b9a37c2441be2a4062c75d79ca208818db58d401d601fd79ca3e8360b8f5fdcfd52e8309_1280.jpg',
            action: () => onNavigate('guides')
        },
        {
            icon: 'target',
            title: 'FFA + Practice Server Setup Guide',
            description: 'Combine FFA combat with practice modes for the ultimate PvP experience.',
            difficulty: 'Advanced',
            image: 'https://pixabay.com/get/gdce28ae5ef0dc1c6b17c76baae35490342cb477ad848e01140011d43340a9392e8447dbd7fd1909bee013733d4addfb8dc9ad8256fb4957cc991c94edf352126_1280.jpg',
            action: () => onNavigate('guides')
        },
        {
            icon: 'home',
            title: 'Survival Server Setup Guide',
            description: 'Create an immersive survival experience with custom features and protection.',
            difficulty: 'Beginner',
            image: 'https://pixabay.com/get/g369fe82e9ff3b9fe24d4d9a8ed6a7ee7d868544fe77cdc77cbee3f0adb147d3baf5b26484467158213df74ee54275236cc9e73684578e387472b0c88bea9fdf3_1280.jpg',
            action: () => onNavigate('guides')
        },
        {
            icon: 'shield',
            title: 'Bedwars Server Setup Guide',
            description: 'Build the ultimate bedwars server with teams, upgrades, and custom maps.',
            difficulty: 'Advanced',
            image: 'https://pixabay.com/get/g58a12a56adba356873b2ea1ecaf9868244c1bbae4c1c2226422454defefff600e88f785659a010689f45fb92f8cee07ac966d68a00d5d07657e3a2079a5bd480_1280.jpg',
            action: () => onNavigate('guides')
        },
        {
            icon: 'gamepad-2',
            title: 'Mini-Games Server Setup Guide',
            description: 'Create a variety of mini-games including parkour, spleef, and more.',
            difficulty: 'Intermediate',
            image: 'https://pixabay.com/get/g9829281d0a6978047c8f77e106dfc424ab101ec77de386e07d020399b9a37c2441be2a4062c75d79ca208818db58d401d601fd79ca3e8360b8f5fdcfd52e8309_1280.jpg',
            action: () => onNavigate('guides')
        },
        {
            icon: 'server',
            title: 'All-in-One Network Setup',
            description: 'Complete network with Proxy + Lobby + Lifesteal + Survival + Bedwars + FFA + Practice + Mini-Games.',
            difficulty: 'Expert',
            image: 'https://pixabay.com/get/gdce28ae5ef0dc1c6b17c76baae35490342cb477ad848e01140011d43340a9392e8447dbd7fd1909bee013733d4addfb8dc9ad8256fb4957cc991c94edf352126_1280.jpg',
            action: () => onNavigate('video-guides')
        }
    ];

    React.useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, []);

    return (
        <div className="fade-in" style={{ padding: '2rem' }}>

            {/* Feature Cards Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '3rem'
            }}>
                {features.map((feature, index) => (
                    <div 
                        key={index}
                        style={{
                            animationDelay: `${index * 0.1}s`
                        }}
                        className="slide-in-left"
                    >
                        <FeatureCard
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            difficulty={feature.difficulty}
                            image={feature.image}
                            onClick={feature.action}
                        />
                    </div>
                ))}
            </div>

            {/* Quick Stats */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
                marginTop: '3rem'
            }}>
                <div className="card text-center">
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'var(--accent-primary)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem'
                    }}>
                        <i data-feather="book-open" style={{ width: '24px', height: '24px', color: 'white' }}></i>
                    </div>
                    <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        20+
                    </h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Comprehensive Guides</p>
                </div>

                <div className="card text-center">
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'var(--success-color)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem'
                    }}>
                        <i data-feather="play-circle" style={{ width: '24px', height: '24px', color: 'white' }}></i>
                    </div>
                    <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        10+
                    </h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Video Tutorials</p>
                </div>

                <div className="card text-center">
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'var(--warning-color)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem'
                    }}>
                        <i data-feather="users" style={{ width: '24px', height: '24px', color: 'white' }}></i>
                    </div>
                    <h3 style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        1000+
                    </h3>
                    <p style={{ color: 'var(--text-secondary)' }}>Servers Created</p>
                </div>
            </div>
        </div>
    );
};

window.Dashboard = Dashboard;

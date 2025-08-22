const { useState } = React;

const VideoGuides = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videoGuides = [
        {
            id: 1,
            title: "BungeeCord Network Setup - Complete Tutorial",
            description: "Learn how to create a multi-server network with BungeeCord proxy for seamless player experience.",
            thumbnail: "https://pixabay.com/get/g9829281d0a6978047c8f77e106dfc424ab101ec77de386e07d020399b9a37c2441be2a4062c75d79ca208818db58d401d601fd79ca3e8360b8f5fdcfd52e8309_1280.jpg",
            duration: "25:30",
            difficulty: "Advanced",
            videoId: "dQw4w9WgXcQ", // Example YouTube video ID
            category: "Network Setup"
        },
        {
            id: 2,
            title: "Velocity Proxy Configuration",
            description: "Modern alternative to BungeeCord with better performance and security features.",
            thumbnail: "https://pixabay.com/get/g36c0217ee36e2ae5137a2a51acc8e497c4003baf0d18e7a4cfd94dfdb03f43ea694a482627a8abb07186731368949eeeff300e5abcde3210829eb6f01be66a66_1280.jpg",
            duration: "18:45",
            difficulty: "Advanced",
            videoId: "dQw4w9WgXcQ",
            category: "Network Setup"
        },
        {
            id: 3,
            title: "Waterfall Proxy for Large Networks",
            description: "Scale your server network to handle hundreds of players with Waterfall proxy.",
            thumbnail: "https://pixabay.com/get/g0958cd4afd5bdf3f8c324d46749218fdd05e66ecd6dc9fa1959c7ae21f852a65378d1f227ffadd242c77421a7495bc14e95b6639bdc46bf7350d2bb2871703e2_1280.jpg",
            duration: "32:15",
            difficulty: "Advanced",
            videoId: "dQw4w9WgXcQ",
            category: "Network Setup"
        },
        {
            id: 4,
            title: "Cross-Server Communication Setup",
            description: "Enable chat, commands, and data synchronization across multiple servers.",
            thumbnail: "https://pixabay.com/get/gdce28ae5ef0dc1c6b17c76baae35490342cb477ad848e01140011d43340a9392e8447dbd7fd1909bee013733d4addfb8dc9ad8256fb4957cc991c94edf352126_1280.jpg",
            duration: "22:00",
            difficulty: "Advanced",
            videoId: "dQw4w9WgXcQ",
            category: "Configuration"
        },
        {
            id: 5,
            title: "Load Balancing for Minecraft Networks",
            description: "Distribute players efficiently across multiple backend servers.",
            thumbnail: "https://pixabay.com/get/g9a6e02ae4a9691bab5dcefbb758939149135b2e6a2964b3c090b395283362c17bbde9df775ff4cc84b3bb8f3bcfd54a3a02be0bed2fc184d19ac966c0b2f5bb3_1280.jpg",
            duration: "28:30",
            difficulty: "Advanced",
            videoId: "dQw4w9WgXcQ",
            category: "Optimization"
        },
        {
            id: 6,
            title: "Advanced Server Security Configuration",
            description: "Protect your multi-server network from common attacks and vulnerabilities.",
            thumbnail: "https://pixabay.com/get/g3b22f110f686f93342be6668b3a713c019ff1daeff091289b7eba3dac8c118ef2bdacb2de0161ecbac1ec50e2d6de6b0db531132c1b03974030ba1583ce81daa_1280.jpg",
            duration: "35:20",
            difficulty: "Advanced",
            videoId: "dQw4w9WgXcQ",
            category: "Security"
        }
    ];

    React.useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, [selectedVideo]);

    if (selectedVideo) {
        return (
            <div className="fade-in" style={{ padding: '2rem' }}>
                {/* Back Button */}
                <button
                    onClick={() => setSelectedVideo(null)}
                    className="btn btn-secondary"
                    style={{ marginBottom: '2rem' }}
                >
                    <i data-feather="arrow-left" style={{ width: '16px', height: '16px' }}></i>
                    Back to Video Guides
                </button>

                {/* Video Player */}
                <div style={{
                    background: 'var(--card-bg)',
                    borderRadius: '12px',
                    padding: '2rem',
                    border: '1px solid var(--border-color)',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {/* Video Header */}
                    <div style={{ marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
                            <span className="badge badge-primary">{selectedVideo.difficulty}</span>
                            <span className="badge badge-secondary">{selectedVideo.category}</span>
                            <span className="badge badge-secondary">
                                <i data-feather="clock" style={{ width: '12px', height: '12px', marginRight: '0.25rem' }}></i>
                                {selectedVideo.duration}
                            </span>
                        </div>
                        <h1 style={{
                            fontSize: '2rem',
                            fontWeight: '700',
                            color: 'var(--text-primary)',
                            marginBottom: '0.5rem'
                        }}>
                            {selectedVideo.title}
                        </h1>
                        <p style={{
                            fontSize: '1.125rem',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.6'
                        }}>
                            {selectedVideo.description}
                        </p>
                    </div>

                    {/* Video Embed */}
                    <div style={{
                        position: 'relative',
                        paddingBottom: '56.25%', // 16:9 aspect ratio
                        height: 0,
                        overflow: 'hidden',
                        borderRadius: '8px',
                        background: 'var(--secondary-bg)'
                    }}>
                        <iframe
                            src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&modestbranding=1&color=white`}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                border: 'none',
                                borderRadius: '8px'
                            }}
                            allowFullScreen
                            title={selectedVideo.title}
                        />
                    </div>

                    {/* Video Info */}
                    <div style={{
                        marginTop: '2rem',
                        padding: '1.5rem',
                        background: 'var(--secondary-bg)',
                        borderRadius: '8px'
                    }}>
                        <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            color: 'var(--text-primary)',
                            marginBottom: '1rem'
                        }}>
                            What you'll learn:
                        </h3>
                        <ul style={{
                            listStyle: 'none',
                            padding: 0,
                            color: 'var(--text-secondary)'
                        }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <i data-feather="check-circle" style={{ width: '16px', height: '16px', color: 'var(--success-color)' }}></i>
                                Complete server network architecture
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <i data-feather="check-circle" style={{ width: '16px', height: '16px', color: 'var(--success-color)' }}></i>
                                Configuration best practices
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                <i data-feather="check-circle" style={{ width: '16px', height: '16px', color: 'var(--success-color)' }}></i>
                                Troubleshooting common issues
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <i data-feather="check-circle" style={{ width: '16px', height: '16px', color: 'var(--success-color)' }}></i>
                                Performance optimization techniques
                            </li>
                        </ul>
                    </div>
                </div>
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
                    Video Guides
                </h1>
                <p style={{
                    fontSize: '1.125rem',
                    color: 'var(--text-secondary)'
                }}>
                    Advanced video tutorials for complex server configurations and multi-server setups
                </p>
            </div>

            {/* Video Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
                gap: '2rem'
            }}>
                {videoGuides.map((video, index) => (
                    <div 
                        key={video.id}
                        className="card slide-in-left"
                        style={{
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden',
                            height: '350px',
                            display: 'flex',
                            flexDirection: 'column',
                            animationDelay: `${index * 0.1}s`
                        }}
                        onClick={() => setSelectedVideo(video)}
                    >
                        {/* Thumbnail */}
                        <div style={{
                            height: '200px',
                            backgroundImage: `url(${video.thumbnail})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            position: 'relative'
                        }}>
                            {/* Play Button Overlay */}
                            <div style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '60px',
                                height: '60px',
                                background: 'rgba(0, 0, 0, 0.8)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'all 0.3s ease'
                            }}>
                                <i data-feather="play" style={{ width: '24px', height: '24px', color: 'white', marginLeft: '2px' }}></i>
                            </div>

                            {/* Duration Badge */}
                            <div style={{
                                position: 'absolute',
                                bottom: '0.75rem',
                                right: '0.75rem',
                                background: 'rgba(0, 0, 0, 0.8)',
                                color: 'white',
                                padding: '0.25rem 0.5rem',
                                borderRadius: '4px',
                                fontSize: '0.75rem',
                                fontWeight: '500'
                            }}>
                                {video.duration}
                            </div>

                            {/* Difficulty Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '0.75rem',
                                left: '0.75rem'
                            }}>
                                <span className="badge badge-primary">
                                    {video.difficulty}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{
                            padding: '1.5rem',
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between'
                        }}>
                            <div>
                                <span style={{
                                    fontSize: '0.75rem',
                                    color: 'var(--accent-primary)',
                                    fontWeight: '500',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em'
                                }}>
                                    {video.category}
                                </span>
                                <h3 style={{
                                    fontSize: '1.125rem',
                                    fontWeight: '600',
                                    color: 'var(--text-primary)',
                                    marginBottom: '0.75rem',
                                    lineHeight: '1.4'
                                }}>
                                    {video.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.875rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.5'
                                }}>
                                    {video.description}
                                </p>
                            </div>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-end',
                                marginTop: '1rem'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.25rem',
                                    color: 'var(--accent-primary)',
                                    fontSize: '0.875rem',
                                    fontWeight: '500'
                                }}>
                                    <span>Watch Tutorial</span>
                                    <i data-feather="play-circle" style={{ width: '16px', height: '16px' }}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Information Section */}
            <div style={{
                marginTop: '3rem',
                padding: '2rem',
                background: 'var(--secondary-bg)',
                borderRadius: '12px',
                textAlign: 'center'
            }}>
                <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem'
                }}>
                    Advanced Configuration Tutorials
                </h3>
                <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '600px',
                    margin: '0 auto'
                }}>
                    These video guides cover complex server network configurations, proxy setups, and advanced optimization techniques. 
                    Perfect for experienced server administrators looking to scale their infrastructure.
                </p>
            </div>
        </div>
    );
};

window.VideoGuides = VideoGuides;

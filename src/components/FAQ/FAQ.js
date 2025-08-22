const { useState } = React;

const FAQ = () => {
    const [openItems, setOpenItems] = useState({});

    const toggleItem = (id) => {
        setOpenItems(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    React.useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, [openItems]);

    return (
        <div className="fade-in" style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                }}>
                    Frequently Asked Questions
                </h1>
                <p style={{
                    fontSize: '1.125rem',
                    color: 'var(--text-secondary)'
                }}>
                    Find answers to common questions about Minecraft server setup and configuration
                </p>
            </div>

            {/* FAQ Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {faqData.map((item, index) => (
                    <div 
                        key={item.id}
                        className="card slide-in-left"
                        style={{
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            animationDelay: `${index * 0.1}s`
                        }}
                        onClick={() => toggleItem(item.id)}
                    >
                        {/* Question */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: '1rem'
                        }}>
                            <h3 style={{
                                fontSize: '1.125rem',
                                fontWeight: '600',
                                color: 'var(--text-primary)',
                                margin: 0,
                                lineHeight: '1.4'
                            }}>
                                {item.question}
                            </h3>
                            <div style={{
                                width: '24px',
                                height: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--accent-primary)',
                                transition: 'transform 0.3s ease',
                                transform: openItems[item.id] ? 'rotate(180deg)' : 'rotate(0deg)'
                            }}>
                                <i data-feather="chevron-down" style={{ width: '20px', height: '20px' }}></i>
                            </div>
                        </div>

                        {/* Answer */}
                        <div style={{
                            maxHeight: openItems[item.id] ? '500px' : '0',
                            overflow: 'hidden',
                            transition: 'all 0.3s ease',
                            opacity: openItems[item.id] ? 1 : 0
                        }}>
                            <div style={{
                                paddingTop: '1rem',
                                borderTop: '1px solid var(--border-color)',
                                marginTop: '1rem'
                            }}>
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--text-secondary)',
                                    lineHeight: '1.6',
                                    margin: 0
                                }}>
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Contact Section */}
            <div style={{
                marginTop: '3rem',
                padding: '2rem',
                background: 'var(--secondary-bg)',
                borderRadius: '12px',
                textAlign: 'center'
            }}>
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
                    <i data-feather="help-circle" style={{ width: '24px', height: '24px', color: 'white' }}></i>
                </div>
                <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                }}>
                    Still have questions?
                </h3>
                <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem'
                }}>
                    Can't find the answer you're looking for? Please reach out to our support team.
                </p>
                <a
                    href="mailto:serversmith@gmail.com"
                    className="btn"
                    style={{ textDecoration: 'none' }}
                >
                    <i data-feather="mail" style={{ width: '16px', height: '16px' }}></i>
                    Contact Support
                </a>
            </div>

            {/* Quick Tips */}
            <div style={{
                marginTop: '2rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '1rem'
            }}>
                <div style={{
                    padding: '1.5rem',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'var(--success-color)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 0.75rem'
                    }}>
                        <i data-feather="book-open" style={{ width: '16px', height: '16px', color: 'white' }}></i>
                    </div>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        Check the Guides
                    </h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                        Browse our comprehensive guides for detailed tutorials
                    </p>
                </div>

                <div style={{
                    padding: '1.5rem',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'var(--warning-color)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 0.75rem'
                    }}>
                        <i data-feather="play-circle" style={{ width: '16px', height: '16px', color: 'white' }}></i>
                    </div>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        Watch Videos
                    </h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                        Visual learner? Check out our video tutorials
                    </p>
                </div>

                <div style={{
                    padding: '1.5rem',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    textAlign: 'center'
                }}>
                    <div style={{
                        width: '32px',
                        height: '32px',
                        background: 'var(--accent-primary)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 0.75rem'
                    }}>
                        <i data-feather="search" style={{ width: '16px', height: '16px', color: 'white' }}></i>
                    </div>
                    <h4 style={{ fontSize: '0.875rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        Search Content
                    </h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', margin: 0 }}>
                        Use the search feature to find specific topics
                    </p>
                </div>
            </div>
        </div>
    );
};

window.FAQ = FAQ;

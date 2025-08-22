const Contact = () => {
    React.useEffect(() => {
        if (window.feather) {
            window.feather.replace();
        }
    }, []);

    return (
        <div className="fade-in" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    marginBottom: '0.5rem'
                }}>
                    Get in Touch
                </h1>
                <p style={{
                    fontSize: '1.125rem',
                    color: 'var(--text-secondary)'
                }}>
                    Have questions about server setup? Need help with configuration? We're here to help!
                </p>
            </div>

            {/* Contact Card */}
            <div className="card" style={{
                textAlign: 'center',
                padding: '3rem 2rem'
            }}>
                {/* Email Icon */}
                <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 2rem',
                    boxShadow: '0 8px 24px var(--shadow-medium)'
                }}>
                    <i data-feather="mail" style={{ width: '32px', height: '32px', color: 'white' }}></i>
                </div>

                {/* Contact Info */}
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem'
                }}>
                    Email Support
                </h2>
                <p style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem',
                    lineHeight: '1.6'
                }}>
                    Send us an email with your questions, issues, or feedback. We'll get back to you as soon as possible.
                </p>

                {/* Email Address */}
                <div style={{
                    padding: '1.5rem',
                    background: 'var(--secondary-bg)',
                    borderRadius: '12px',
                    marginBottom: '2rem',
                    border: '1px solid var(--border-color)'
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.75rem',
                        fontSize: '1.125rem',
                        color: 'var(--text-primary)',
                        fontWeight: '500'
                    }}>
                        <i data-feather="at-sign" style={{ width: '20px', height: '20px', color: 'var(--accent-primary)' }}></i>
                        <span>serversmith@gmail.com</span>
                    </div>
                </div>

                {/* Action Button */}
                <a
                    href="mailto:serversmith@gmail.com?subject=ServerSmith Support Request&body=Hello ServerSmith team,%0D%0A%0D%0AI need help with:%0D%0A%0D%0A"
                    className="btn"
                    style={{
                        textDecoration: 'none',
                        fontSize: '1rem',
                        padding: '1rem 2rem'
                    }}
                >
                    <i data-feather="send" style={{ width: '20px', height: '20px' }}></i>
                    Send Email
                </a>
            </div>

            {/* Additional Info */}
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
                        width: '40px',
                        height: '40px',
                        background: 'var(--success-color)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem'
                    }}>
                        <i data-feather="clock" style={{ width: '20px', height: '20px', color: 'white' }}></i>
                    </div>
                    <h3 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.5rem'
                    }}>
                        Response Time
                    </h3>
                    <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        margin: 0
                    }}>
                        We typically respond within 24-48 hours
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
                        width: '40px',
                        height: '40px',
                        background: 'var(--warning-color)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 1rem'
                    }}>
                        <i data-feather="help-circle" style={{ width: '20px', height: '20px', color: 'white' }}></i>
                    </div>
                    <h3 style={{
                        fontSize: '1rem',
                        fontWeight: '600',
                        color: 'var(--text-primary)',
                        marginBottom: '0.5rem'
                    }}>
                        Support Topics
                    </h3>
                    <p style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        margin: 0
                    }}>
                        Server setup, configuration, and troubleshooting
                    </p>
                </div>
            </div>

            {/* Tips Section */}
            <div style={{
                marginTop: '2rem',
                padding: '1.5rem',
                background: 'var(--secondary-bg)',
                borderRadius: '8px',
                border: '1px solid var(--border-color)'
            }}>
                <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <i data-feather="lightbulb" style={{ width: '18px', height: '18px', color: 'var(--accent-primary)' }}></i>
                    Tips for Better Support
                </h3>
                <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    color: 'var(--text-secondary)',
                    fontSize: '0.875rem'
                }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <i data-feather="check" style={{ width: '14px', height: '14px', color: 'var(--success-color)', marginTop: '0.125rem', minWidth: '14px' }}></i>
                        Include your server version and platform details
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <i data-feather="check" style={{ width: '14px', height: '14px', color: 'var(--success-color)', marginTop: '0.125rem', minWidth: '14px' }}></i>
                        Describe the steps you've already tried
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <i data-feather="check" style={{ width: '14px', height: '14px', color: 'var(--success-color)', marginTop: '0.125rem', minWidth: '14px' }}></i>
                        Share any error messages you've encountered
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <i data-feather="check" style={{ width: '14px', height: '14px', color: 'var(--success-color)', marginTop: '0.125rem', minWidth: '14px' }}></i>
                        Check our FAQ section before reaching out
                    </li>
                </ul>
            </div>
        </div>
    );
};

window.Contact = Contact;

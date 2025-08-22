const { createContext, useContext, useState, useEffect } = React;

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('serversmith-theme');
        if (savedTheme) {
            setIsDark(savedTheme === 'dark');
        } else {
            // Default to dark theme for ServerSmith
            setIsDark(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('serversmith-theme', isDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

window.ThemeProvider = ThemeProvider;
window.useTheme = useTheme;

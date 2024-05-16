'use client'
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

export type Theme = 'jade' | 'white' | 'black' | 'blue' | 'gray' | 'purple' | 'green' | 'red' | 'yellow' | 'orange' | 'pink';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('jade');

    useEffect(() => {
        document.documentElement.className = `theme-${theme}`;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

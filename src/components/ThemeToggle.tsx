'use client'
import React from 'react';
import { Theme, useTheme } from '../context/ThemeContext';

const themes: Theme[] = ['jade', 'white', 'black', 'blue', 'gray', 'purple', 'green', 'red', 'yellow', 'orange', 'pink'];

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    return (
        <div>
            {themes.map((t) => (
                <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`p-2 m-1 ${theme === t ? 'border border-black' : ''}`}
                >
                    {t}
                </button>
            ))}
        </div>
    );
};

export default ThemeToggle;

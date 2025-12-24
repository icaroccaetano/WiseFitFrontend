import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', title }) => {
    return (
        <div className={`bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 overflow-hidden ${className}`}>
            {title && (
                <div className="bg-[#086972] p-6">
                    <h2 className="text-2xl font-bold text-white text-center">{title}</h2>
                </div>
            )}
            <div className="p-6 md:p-8">
                {children}
            </div>
        </div>
    );
};

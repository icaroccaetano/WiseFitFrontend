import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
    label?: string;
    error?: string;
    as?: 'input' | 'select';
    options?: { value: string; label: string }[];
}

export const Input: React.FC<InputProps> = ({
    label,
    error,
    as = 'input',
    options,
    className = '',
    ...props
}) => {
    const inputStyles = "w-full px-4 py-3 rounded-xl border-2 border-[#086972]/20 bg-white/50 focus:border-[#17B978] focus:ring-2 focus:ring-[#17B978]/20 focus:outline-none transition-all duration-300 text-[#071A52] placeholder-[#071A52]/40";

    return (
        <div className={`mb-4 ${className}`}>
            {label && (
                <label className="block text-[#071A52] font-semibold mb-2 ml-1">
                    {label}
                </label>
            )}

            {as === 'select' ? (
                <select className={inputStyles} {...props as React.SelectHTMLAttributes<HTMLSelectElement>}>
                    {options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
            ) : (
                <input className={inputStyles} {...props} />
            )}

            {error && (
                <p className="text-red-500 text-sm mt-1 ml-1">{error}</p>
            )}
        </div>
    );
};

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-md";
  
  const variants = {
    primary: "bg-[#17B978] text-white hover:bg-[#129e66] hover:shadow-lg",
    secondary: "bg-[#086972] text-white hover:bg-[#06555c] hover:shadow-lg",
    outline: "border-2 border-[#086972] text-[#086972] hover:bg-[#086972] hover:text-white",
    ghost: "bg-transparent text-[#071A52] hover:bg-[#071A52]/10 shadow-none",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

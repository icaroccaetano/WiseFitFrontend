import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface PageLayoutProps {
    children: React.ReactNode;
    showNav?: boolean;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, showNav = true }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#DCD9A7]">
            {showNav && (
                <nav className="bg-[#086972] text-white shadow-lg sticky top-0 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-16">
                            <Link href="/" className="flex items-center space-x-2 group">
                                {/* Placeholder for logo if needed, or just text */}
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#086972] font-bold group-hover:bg-[#17B978] group-hover:text-white transition-colors">
                                    W
                                </div>
                                <span className="font-bold text-xl tracking-tight">WiseFit</span>
                            </Link>

                            <div className="hidden md:flex space-x-4">
                                <Link href="/" className="px-3 py-2 rounded-md hover:bg-[#17B978] transition-colors">Home</Link>
                                <Link href="/calculo" className="px-3 py-2 rounded-md hover:bg-[#17B978] transition-colors">Calorias</Link>
                                <Link href="/macros" className="px-3 py-2 rounded-md hover:bg-[#17B978] transition-colors">Macros</Link>
                                <Link href="/bioimpedancia" className="px-3 py-2 rounded-md hover:bg-[#17B978] transition-colors">Bioimpedância</Link>
                            </div>

                            <div className="flex items-center space-x-4">
                                <Link href="/login" className="text-sm hover:text-[#17B978] transition-colors">Sair</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            )}

            <main className="flex-grow container mx-auto px-4 py-8 md:py-12 relative z-10">
                {children}
            </main>

            <footer className="bg-[#071A52] text-white py-8 mt-auto relative z-20">
                <div className="container mx-auto px-4 text-center">
                    <p className="opacity-80">&copy; {new Date().getFullYear()} WiseFit. Sua saúde com inteligência.</p>
                </div>
            </footer>

            {/* Background decoration */}
            <div className="fixed bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-[#17B978]/20 to-transparent pointer-events-none z-0 clip-triangle" />
        </div>
    );
};
